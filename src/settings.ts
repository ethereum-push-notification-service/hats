import { LPUniswapURIs, MasterAddresses, Endpoint, Subgraph, VaultService } from "./constants/constants";
import { ChainId } from '@usedapp/core'
import { NFTAirdropAddress, TokenAirdropAddress, TokenAirdropCID, TokenAirdropDelegatees } from "components/Airdrop/constants";

require('dotenv').config();

export const NETWORK: ChainId = parseInt(process.env.REACT_APP_NETWORK!) as ChainId || ChainId.Rinkeby;
export const AVAILABLE_NETWORKS: ChainId[] = process.env.REACT_APP_AVAILABLE_NETWORKS ? process.env.REACT_APP_AVAILABLE_NETWORKS.split(',').map(chainId => parseInt(chainId)) : undefined || [NETWORK];
export const SUBGRAPH_URI = process.env.REACT_APP_SUBGRAPH_URI || Subgraph[NETWORK];
export const LP_UNISWAP_URI = process.env.REACT_APP_LP_UNISWAP_URI || LPUniswapURIs[NETWORK];
export const MASTER_ADDRESS = process.env.REACT_APP_MASTER_ADDRESS || MasterAddresses[NETWORK];
export const ENDPOINT = process.env.REACT_APP_ENDPOINT || Endpoint[NETWORK];
export const VAULT_SERVICE = process.env.VAULT_SERVICE || VaultService;
export const NFT_AIRDROP_ADDRESS = NFTAirdropAddress[NETWORK] || NFTAirdropAddress[ChainId.Mainnet];
export const TOKEN_AIRDROP_ADDRESS = TokenAirdropAddress[NETWORK];
export const DELEGATEES_IPFS = process.env.REACT_APP_DELEGATEES_IPFS || TokenAirdropDelegatees[NETWORK];
export const TOKEN_AIRDROP_IPFS_CID = process.env.REACT_APP_TOKEN_AIRDROP_IPFS_CID || TokenAirdropCID[NETWORK];
export const DATA_POLLING_INTERVAL = 10000;

/** Currently not in use */
export const INFURA_ID = process.env.REACT_APP_INFURA_ID || "";