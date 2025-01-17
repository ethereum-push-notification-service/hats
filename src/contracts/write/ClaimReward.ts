import { useAccount, useContractWrite, useNetwork } from "wagmi";
import { IVault } from "types/types";
import { switchNetworkAndValidate } from "utils/switchNetwork.utils";
import { HATSVaultV1_abi } from "data/abis/HATSVaultV1_abi";
import { RewardController_abi } from "data/abis/RewardController_abi";

export class ClaimRewardContract {
  /**
   * Returns a caller function to claim the user's rewards from the vault.
   *
   * @remarks
   * This method is supporting v1 and v2 vaults. For v2 vaults, we are using the rewardController.
   *
   * @param vault - The selected vault to claim the user's rewards from
   */
  static hook = (vault: IVault) => {
    const { address: account } = useAccount();
    const { chain } = useNetwork();

    const contractAddress = vault.version === "v1" ? vault.master.address : vault.rewardControllers[0].id;
    const abi = vault.version === "v1" ? HATSVaultV1_abi : RewardController_abi;

    const claimReward = useContractWrite({
      mode: "recklesslyUnprepared",
      address: contractAddress,
      abi: abi as any,
      functionName: "claimReward",
      // chainId: vault.chainId,
    });

    return {
      ...claimReward,
      send: async () => {
        await switchNetworkAndValidate(chain!.id, vault.chainId as number);

        if (vault?.version === "v2") {
          // [params]: vault, user
          return claimReward.write!({ recklesslySetUnpreparedArgs: [vault.id, account] });
        } else {
          // [params]: pid
          return claimReward.write!({ recklesslySetUnpreparedArgs: [vault.pid] });
        }
      },
    };
  };
}
