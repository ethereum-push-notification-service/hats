import { VaultService, DefaultBotAddress, StagingBotAddress } from "./constants/constants";
import { Chain, ChainId, Mainnet } from "@usedapp/core";
import { Chains } from "constants/chains";

export const CHAINID: ChainId = process.env.REACT_APP_CHAINID
  ? (parseInt(process.env.REACT_APP_CHAINID) as ChainId)
  : ChainId.Goerli;

export const CHAINS = Chains;
if (process.env.REACT_APP_ENDPOINT_MAINNET) {
  CHAINS[Mainnet.chainId].endpoint = process.env.REACT_APP_ENDPOINT_MAINNET;
}
export const VAULT_SERVICE = process.env.REACT_APP_VAULT_SERVICE || VaultService;
const prodHosts = ['app.hats.finance'];
export const DEFAULT_BOT = process.env.REACT_APP_DEFAULT_BOT || (!prodHosts.includes(window.location.hostname) && StagingBotAddress) || DefaultBotAddress;

export const defaultChain: Chain = Chains[CHAINID].chain;
