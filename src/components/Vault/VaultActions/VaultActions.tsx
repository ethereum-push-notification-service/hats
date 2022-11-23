import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEthers } from "@usedapp/core";
import { useSupportedNetwork } from "hooks/useSupportedNetwork";
import { IPoolWithdrawRequest, IVault } from "types/types";
import { RoutePaths } from "navigation";
import { WithdrawTimer } from "pages/HoneypotsPage/DepositWithdraw";
import "./VaultActions.scss";

interface IProps {
  data?: IVault;
  withdrawRequests?: IPoolWithdrawRequest[];
  preview?: boolean;
}

export default function VaultActions(props: IProps) {
  const navigate = useNavigate();
  const isSupportedNetwork = useSupportedNetwork();
  const { t } = useTranslation();
  const { account } = useEthers();

  return (
    <div className="vault-action-wrapper">
      <button
        className="deposit-withdraw"
        onClick={() => {
          navigate(`${RoutePaths.vaults}/${props.data?.id}/deposit`);
        }}
        disabled={props.preview || !account || !isSupportedNetwork}>
        {t("Vault.deposit-withdraw")}
      </button>
      {!props.data?.multipleVaults && !props.preview && <WithdrawTimer vault={props.data!} showWithdrawState={false} />}
    </div>
  );
}