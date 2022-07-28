import { useQuery } from "@apollo/client";
import { TransactionStatus, useContractFunction, useEthers } from "@usedapp/core";
import { HATVaultsNFTContract, NFTContractDataProxy } from "constants/constants";
import { Bytes, Contract } from "ethers";
import { keccak256, solidityKeccak256 } from "ethers/lib/utils";
import { useCallback, useEffect, useState } from "react";
import { AirdropMachineWallet, IStaker, NFTTokenInfo, TokenInfo } from "types/types";
import { ipfsTransformUri } from "utils";
import hatVaultNftAbi from "data/abis/HATVaultsNFT.json";
import { GET_STAKER } from "graphql/subgraph";
import moment from "moment";

const { MerkleTree } = require('merkletreejs');

interface MerkleTreeChanged {
  merkleTreeIPFSRef: string;
  deadline: number;
  root: Bytes;
}

export interface INFTTokenData {
  lastMerkleTree?: MerkleTreeChanged;
  merkleTree?: AirdropMachineWallet[];
  isBeforeDeadline?: boolean;
  redeemable?: NFTTokenInfo[];
  redeemTree: () => Promise<any>;
  redeemMultipleFromTreeState: TransactionStatus;
  redeemShares: () => Promise<any>;
  redeemMultipleFromSharesState: TransactionStatus;
  actualAddressInfo?: AirdropMachineWallet;
  actualAddress?: string;
  airdropToRedeem: boolean;
  depositToRedeem: boolean;
}

const DATA_REFRESH_TIME = 10000;

export function useNFTTokenData(address?: string): INFTTokenData {
  const { library, account, chainId } = useEthers();
  const [contract, setContract] = useState<Contract>();
  const { send: redeemMultipleFromTree, state: redeemMultipleFromTreeState } =
    useContractFunction(new Contract(chainId && HATVaultsNFTContract[chainId],
      hatVaultNftAbi), "redeemMultipleFromTree", { transactionName: "Redeem NFTs" });
  const { send: redeemMultipleFromShares, state: redeemMultipleFromSharesState } = useContractFunction(
    new Contract(chainId && HATVaultsNFTContract[chainId], hatVaultNftAbi), "redeemMultipleFromShares", { transactionName: "Redeem NFTs" });
  const [nftTokens, setNftTokens] = useState<NFTTokenInfo[]>([]);
  const actualAddress = address ?? account;
  const [lastMerkleTree, setLastMerkleTree] = useState<MerkleTreeChanged>();
  /** Temporary use of TEMP_WALLETS until the merkle tree will be updated to the new structure */
  const [merkleTree, setMerkleTree] = useState<AirdropMachineWallet[]>();
  const isBeforeDeadline = lastMerkleTree?.deadline ? moment().unix() < Number(lastMerkleTree.deadline) : undefined;

  const actualAddressInfo = merkleTree?.find(wallet => wallet.address.toLowerCase() === actualAddress?.toLowerCase());

  const redeemable = nftTokens?.filter(nft => !nft.isRedeemed);
  console.log("redeemable", redeemable);


  const airdropToRedeem = redeemable?.filter(nft => nft.type === "MerkleTree")?.some(nft => !nft.isRedeemed);
  const depositToRedeem = redeemable?.filter(nft => nft.type === "Deposit")?.some(nft => !nft.isRedeemed);
  console.log("useNftTokenData", actualAddress);

  useEffect(() => {
    setNftTokens([]);
  }, [actualAddress]);

  useEffect(() => {
    if (chainId)
      setContract(new Contract(HATVaultsNFTContract[chainId], hatVaultNftAbi, library));
  }, [library, chainId])

  const { data: stakerData } = useQuery<{ stakers: IStaker[] }>(
    GET_STAKER, {
    variables: { address: actualAddress },
    context: { chainId },
    pollInterval: DATA_REFRESH_TIME
  })
  console.log("staker", stakerData);


  const pidsWithAddress = stakerData?.stakers.map(staker => ({ pid: staker?.pid, masterAddress: staker?.master.address }));

  const getEligibilityForPids = useCallback(async () => {
    if (!pidsWithAddress || !contract) return;
    const eligibilitiesPerPid = await Promise.all(pidsWithAddress?.map(async (pidWithAddress) => {
      const { pid, masterAddress } = pidWithAddress;
      console.log(masterAddress);
      const isEligibile = await contract.isEligible(NFTContractDataProxy[masterAddress.toLowerCase()], pid, actualAddress);
      const tier = await contract.getTierFromShares(NFTContractDataProxy[masterAddress.toLowerCase()], pid, actualAddress);
      const tokens: NFTTokenInfo[] = [];
      for (let i = 1; i++; i <= tier) {
        const isRedeemed = await contract.tokensRedeemed(pid, tier, actualAddress) as boolean;
        /** TODO: need to add +1 like in tree? ; need to fetch the tokenInfo like in the tree? */
        const tokenId = await contract.tokenIds(actualAddress, pid, tier);
        console.log(tokenId)
        const nftInfo = await contract.uri(tokenId);
        tokens.push({ ...pidWithAddress, tier, isEligibile, isRedeemed, tokenId, nftInfo, type: "Deposit" });
      }
      return tokens;
    }));
    const eligibilityPerPid = eligibilitiesPerPid.flat();
    console.log("sdfdf")
    setNftTokens(prev => [...prev, ...eligibilityPerPid]);
  }, [contract, actualAddress, pidsWithAddress])

  useEffect(() => {
    if (pidsWithAddress && pidsWithAddress.length > 0)
      getEligibilityForPids();
  }, [getEligibilityForPids, pidsWithAddress])

  const getTreeEligibility = useCallback(async () => {
    if (!contract || !actualAddressInfo) return;
    const treeNfts = await Promise.all(actualAddressInfo.nft_elegebility.map(async (nft): Promise<NFTTokenInfo> => {
      const isRedeemed = await contract.tokensRedeemed(NFTContractDataProxy[nft.masterAddress.toLowerCase()], nft.pid, nft.tier, actualAddress) as boolean;
      const tokenId = await contract.tokenIds(actualAddress, nft.pid, nft.tier);
      /** adding +1 because the indexes in the IPFS start in 1 (not 0) */
      const tokenUri = await contract.uri(tokenId + 1);
      const nftInfo = await (await fetch(ipfsTransformUri(tokenUri))).json() as TokenInfo;
      return { ...nft, isRedeemed, tokenId, nftInfo, isEligibile: true, type: "MerkleTree" };
    }));
    setNftTokens(prev => [...prev, ...treeNfts])
  }, [contract, actualAddress, actualAddressInfo])

  const getMerkleTree = useCallback(async () => {
    const data = contract?.filters.MerkleTreeChanged();
    if (!data) {
      return;
    }
    const filter = await contract?.queryFilter(data, 0);
    if (filter) {
      const lastElement = filter[filter.length - 1] as any | undefined;
      const args = lastElement.args as MerkleTreeChanged;
      const response = await fetch(ipfsTransformUri(args.merkleTreeIPFSRef));
      const ipfsContent = await response.json()
      setMerkleTree(ipfsContent.wallets);
      setLastMerkleTree(args);
    }
  }, [contract])

  useEffect(() => {
    if (contract)
      getMerkleTree();
  }, [getMerkleTree, contract])

  useEffect(() => {
    getTreeEligibility();
  }, [getTreeEligibility]);

  const buildProofsForRedeemables = useCallback(() => {
    if (!merkleTree) {
      return;
    }
    /**
    * The tree is built from ALL the data (including the redeemed NFTs)
    */
    const builtMerkleTree = buildMerkleTree(merkleTree);

    /**
     * Build the proofs only for the non-redeemed NFTs.
     */
    const proofs = redeemable?.map(nft => {
      return builtMerkleTree.getHexProof(hashToken(nft.masterAddress, nft.pid, actualAddress!, nft.tier));
    })
    return proofs;
  }, [redeemable, merkleTree, actualAddress]);

  const redeemTree = useCallback(async () => {
    const redeemableProofs = buildProofsForRedeemables();
    if (!redeemable) return;
    const hatVaults = redeemable.map(nft => nft.masterAddress);
    const pids = redeemable.map(nft => nft.pid);
    const tiers = redeemable.map(nft => nft.tier);
    await redeemMultipleFromTree(hatVaults, pids, actualAddress, tiers, redeemableProofs);
  }, [redeemable, actualAddress, buildProofsForRedeemables, redeemMultipleFromTree]);

  const redeemShares = useCallback(async () => {
    const depositRedeemables = redeemable.filter(nft => nft.type === "Deposit" && nft.isEligibile);
    const hatVaults = depositRedeemables.map(nft => nft.masterAddress);
    const pids = depositRedeemables.map(nft => nft.pid);
    await redeemMultipleFromShares(hatVaults, pids, actualAddress);
  }, [redeemMultipleFromShares, actualAddress, redeemable])

  return {
    lastMerkleTree,
    merkleTree,
    isBeforeDeadline,
    redeemable,
    redeemTree,
    redeemMultipleFromTreeState,
    redeemShares,
    redeemMultipleFromSharesState,
    actualAddressInfo,
    actualAddress,
    airdropToRedeem,
    depositToRedeem
  };
};


const buildMerkleTree = (data: AirdropMachineWallet[]) => {
  const hashes: Buffer[] = [];
  data.forEach(wallet => {
    wallet.nft_elegebility.forEach(nft => {
      hashes.push(hashToken(nft.masterAddress, nft.pid, wallet.address, nft.tier));
    })
  })

  return new MerkleTree(hashes, keccak256, { sortPairs: true });
}

const hashToken = (hatVaults: string, pid: number, account: string, tier: number) => {
  return Buffer.from(solidityKeccak256(['address', 'uint256', 'address', 'uint8'], [hatVaults, pid, account, tier]).slice(2), 'hex');
}