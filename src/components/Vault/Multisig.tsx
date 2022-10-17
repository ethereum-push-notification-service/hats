import { CHAINID } from "../../settings";
import CopyToClipboard from "../Shared/CopyToClipboard";
import "./Multisig.scss";
import { Chains } from "../../constants/constants";
import { shortenIfAddress } from "@usedapp/core";
import { defaultAnchorProps } from "constants/defaultAnchorProps";

interface IProps {
  multisigAddress: string
}

export default function Multisig(props: IProps) {
  const { multisigAddress } = props;
  const chain = Chains[CHAINID];

  return (
    <div className="multi-sig-address-wrapper">
      <a 
        {...defaultAnchorProps}
        href={chain?.getExplorerAddressLink(multisigAddress)}
        className="multi-sig-address">
        {shortenIfAddress(multisigAddress)}
      </a>
      <CopyToClipboard value={multisigAddress} />
    </div>
  )
}
