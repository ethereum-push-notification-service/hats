import { useTranslation } from "react-i18next";
import { Pill } from "components";

export const GovApprovalStatusCard = () => {
  const { t } = useTranslation();

  const isApprovedByGov = false;

  return (
    <div className="status-card">
      <div className="status-card__title">
        <span>{t("govApproval")}</span>
        <Pill color={isApprovedByGov ? "blue" : "red"} text={isApprovedByGov ? t("live") : t("pendingApproval")} />
      </div>

      {isApprovedByGov ? (
        <p className="status-card__text">{t("vautlLiveExplanation")}</p>
      ) : (
        <>
          <p className="status-card__text">{t("pendingApprovalExplanation")}</p>
          {/* <Button className="status-card__button">{t("checkIn")}</Button> */}
        </>
      )}
    </div>
  );
};