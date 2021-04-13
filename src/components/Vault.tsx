import React, { useState } from "react";
import "../styles/Vault.scss";
import { IVault } from "../types/types";
import { useSelector } from "react-redux";
import millify from "millify";
import { fromWei, getNetworkNameByChainId, numberWithCommas } from "../utils";
import ArrowIcon from "../assets/icons/arrow.icon";
import { NETWORK } from "../settings";
import { RootState } from "../reducers";

interface IProps {
  data: IVault,
  setShowModal: (show: boolean) => any,
  setModalData: (data: any) => any
}

export default function Vault(props: IProps) {
  const [toggleRow, setToggleRow] = useState(false);
  const provider = useSelector((state: RootState) => state.web3Reducer.provider);
  const chainId = useSelector((state: RootState) => state.web3Reducer.provider?.chainId) ?? "";
  const network = getNetworkNameByChainId(chainId);
  const { name, totalStaking, numberOfApprovedClaims, master } = props.data;

  return (
    <React.Fragment>
      <tr className="inner-row">
        <td>
          <div className={toggleRow ? "arrow open" : "arrow"} onClick={() => setToggleRow(!toggleRow)}><ArrowIcon /></div>
        </td>
        <td style={{ textAlign: "left" }}>{name}</td>
        <td>{millify(Number(fromWei(totalStaking)))}</td>
        <td>{numberWithCommas(Number(numberOfApprovedClaims))}</td>
        <td>???</td>
        <td>{`???%`}</td>
        <td>
          <button
            className="action-btn"
            onClick={() => { props.setShowModal(true); props.setModalData(props.data) }}
            disabled={!provider || network !== NETWORK}>
            DEPOSIT / WITHDRAW
          </button>
        </td>
      </tr>
      {
        toggleRow &&
        <tr>
          <td className="sub-cell" colSpan={7}>{`Vulnerabilities Submitted: ${numberWithCommas(Number(master.numberOfSubmittedClaims))}`}</td>
        </tr>
      }
    </React.Fragment>
  )
}
