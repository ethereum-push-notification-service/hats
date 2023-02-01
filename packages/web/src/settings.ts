import { mainnet } from "wagmi/chains";
import { stagingServiceUrl, prodServiceUrl } from "./constants/constants";
import { ChainsConfig, IChainConfiguration } from "config/chains";

const prodHosts = ["app.hats.finance"];

export const IS_PROD = prodHosts.includes(window.location.hostname);
export const BASE_SERVICE_URL = process.env.REACT_APP_SERVICE_URL ?? (IS_PROD ? prodServiceUrl : stagingServiceUrl);

export const INFURA_API_KEY = process.env.REACT_APP_INFURA_API_KEY ?? "";
export const WHEREVER_MAINNET_KEY = process.env.REACT_APP_WHEREVER_MAINNET_KEY;
export const WHEREVER_GOERLI_KEY = process.env.REACT_APP_WHEREVER_GOERLI_KEY;

export const defaultChain: IChainConfiguration = ChainsConfig[mainnet.id];