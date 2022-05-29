import { useCallback, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { getSubmittedClaim } from "graphql/subgraph";
import EditableContent from "components/CommitteeTools/components/EditableContent/EditableContent";
import Select from "components/Shared/Select/Select";
import PgpKey from "components/VaultEditor/PgpKey";
import { IVault, IVaultDescription } from "types/types";

import "./BountyPayout.scss";
import { ipfsTransformUri } from "utils";
import { VaultContext } from "components/CommitteeTools/store";
import { readPrivateKeyFromStoredKey } from "components/CommitteeTools/components/Decrypt/Decrypt";
import { decrypt, readMessage } from "openpgp";
import { useVaults } from "hooks/useVaults";
import { useCalcClaimRewards, usePendingApprovalClaim } from "hooks/contractHooks";
import VaultSelector from "./VaultSelector";
import { formatUnits } from "@ethersproject/units";

export default function BountyPayout() {
  const { t } = useTranslation();
  const vaultContext = useContext(VaultContext);
  const { descriptionHash } = useParams();
  const { loading, error, data } = useQuery(
    getSubmittedClaim(descriptionHash || ""), { fetchPolicy: "no-cache" });
  const [ipfsDate, setIpfsDate] = useState<Date | undefined>(new Date());
  const [selectedVault, setSelectedVault] = useState<string | undefined>();
  const [selectedSeverity, setSelectedSeverity] = useState<number | undefined>();
  const [beneficiary, setBeneficiary] = useState<string | undefined>();
  const [decryptedMessage, setDecryptedMessage] = useState<string>("");
  const { vaults } = useVaults()
  const { send: pendingApprovalClaim } = usePendingApprovalClaim()
  const vault = vaults && vaults.find(v => v.parentVault.pid === selectedVault)
  const severities = (vault?.description as IVaultDescription)?.severities;
  const severity = severities && severities.find(s => s.index === selectedSeverity)

  useEffect(() => {
    if (!loading && !error && data && data.submittedClaims) {
      if (data.submittedClaims.length) {
        setBeneficiary(data.submittedClaims[0].claimer);
      }
    }
  }, [loading, error, data]);

  const { hackerReward } = useCalcClaimRewards(selectedVault, selectedSeverity) ?? {}

  const clearClaimToSubmit = () => {
    setBeneficiary(undefined);
    setSelectedSeverity(undefined);
    setSelectedVault(undefined);
  };

  const createPayoutTransaction = useCallback(() => {
    pendingApprovalClaim(selectedVault,
      beneficiary,
      selectedSeverity
    );
  }, [selectedVault, beneficiary, selectedSeverity, pendingApprovalClaim]);

  const tryDecryptClaim = useCallback(async (ipfsHash) => {
    // we must have the vault unlocked to try to decrypt
    if (vaultContext.isLocked) return;
    // download the message from IPFS
    const data = await fetch(`${ipfsTransformUri(ipfsHash)}`)
    const armoredMessage = await data.text()

    // try to decrypt the message with all available keys
    for (const storedKey of vaultContext.vault!.storedKeys) {
      const privateKey = await readPrivateKeyFromStoredKey(
        storedKey.privateKey,
        storedKey.passphrase
      );
      // we try because on failure we go to the next key
      try {
        const message = await readMessage({ armoredMessage });
        const { data: decrypted } = await decrypt({
          message,
          decryptionKeys: privateKey
        });
        setDecryptedMessage(decrypted);
        // we need to find the vault which contains the key
        const vaultOfKey = vaults?.find((vault) => {
          const description = vault && (vault.isGuest ? vault.parentDescription : vault.description);
          const keyOrKeys = description?.["communication-channel"]["pgp-pk"]
          if (Array.isArray(keyOrKeys)) {
            const keys = keyOrKeys as string[]
            return keys.includes(storedKey.publicKey)
          } else {
            const key = keyOrKeys as string
            return key === storedKey.publicKey
          }
        })
        setSelectedVault(vaultOfKey?.parentVault.pid);
        break;
      } catch (error) {
        // this key cannot decrypt the message, we try the next one
        continue;
      }
    }
  }, [vaultContext.isLocked, vaultContext.vault, vaults])

  useEffect(() => {
    tryDecryptClaim(descriptionHash);
  }, [descriptionHash, tryDecryptClaim]);

  return (
    <div className="content bounty-payout">
      {/* Title and Description */}
      <div className="bounty-payout__title">{t("BountyPayout.create")}</div>
      <p className="bounty-payout__description">
        {t("BountyPayout.pgp-not-recognized")}
      </p>

      <VaultSelector
        onSelect={pid => setSelectedVault(pid)}
        selected={selectedVault} />

      {/* Communication Channel */}
      <section className="bounty-payout__section">
        <label>{t("BountyPayout.signed-pgp")}</label>
        <div className="pgp-key">
          <PgpKey onSelected={() => { }}></PgpKey>
          <label>{t("BountyPayout.decrypted-message")}</label>
          <EditableContent
            name="communication-channel.pgp-pk"
            value={decryptedMessage}
            onChange={() => { }}
          />
        </div>
      </section>

      {/* Payout Details */}
      <section className="bounty-payout__section">
        <div className="payout-details">
          <div className="payout-details__header">
            <p className="bounty-payout__section-title">
              {t("BountyPayout.payout-details")}
            </p>
          </div>
          <div className="payout-details__actions">
            {ipfsDate && (
              <div className="payout-details__last-saved-time">
                {`${t("BountyPayout.last-saved-time")} `}
                {ipfsDate.toLocaleString()}
                {`(${t("BountyPayout.local-time")})`}
              </div>
            )}
            {!ipfsDate && <div>&nbsp;</div>}
            <div className="payout-details__buttons">
              <button className="fill">{t("BountyPayout.revert")}</button>
              <button className="fill">{t("BountyPayout.new")}</button>
            </div>
          </div>
          <div className="payout-details__content">
            <div className="payout-details__address">
              <label>{t("BountyPayout.add-wallet-address")}</label>
              <EditableContent
                textInput
                pastable
                colorable
                name="beneficiary"
                value={beneficiary}
                onChange={(e) => setBeneficiary(e.target.value)}
                placeholder={t("BountyPayout.wallet-address")}
              />
            </div>
            <div className="payout-details__severity">
              <label>{t("BountyPayout.severity")}</label>
              <Select
                name="severity"
                value={selectedSeverity}
                onChange={(e) => {
                  console.log(e.target);

                  setSelectedSeverity(parseInt(e.target.value))
                }}
                options={((severities || []).map(
                  (severity) => ({
                    label: severity.name,
                    value: severity.index
                  })
                ))}
              />
            </div>
            <div className="payout-details__severity-desc">
              <label>{t("BountyPayout.severity-description")}</label>
              <p>{t("BountyPayout.severity-description-content")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payout */}
      <section className="bounty-payout__section">
        <div className="payout">
          <p className="bounty-payout__section-title">
            {t("BountyPayout.payout")}
          </p>
          <div className="payout__content">
            <label>{t("BountyPayout.payout")}</label>
            <div className="payout__severity">
              <p className="payout__severity-title">{severity ? severity.name : "Select Sevetiy"}</p>
              <p className="payout__severity-value">{
                hackerReward ?
                  formatUnits(hackerReward, vault?.parentVault.stakingTokenDecimals)
                  : "-"} {vault?.parentVault.stakingTokenSymbol}</p>
            </div>
            <div className="payout__severity-desc">
              {t("BountyPayout.payout-severity-desc")}
            </div>
          </div>
        </div>
      </section>

      <div className="bounty-payout__actions">
        <button onClick={clearClaimToSubmit}>{t("BountyPayout.clear")}</button>
        <div style={{ display: "flex" }}>
          <button
            disabled={
              !(selectedVault && selectedSeverity && beneficiary)
            }
            className="fill"
            onClick={createPayoutTransaction}
          >
            {t("BountyPayout.create-payout-transaciton")}
          </button>
          {/* <button
            className="fill"
            onClick={approvePayoutTransaction}
          >
            {t("BountyPayout.approve-payout-transaciton")}
          </button> */}
        </div>
      </div>

      {/* Signees */}
      <section className="bounty-payout__section">
        <div className="signees">
          <p className="bounty-payout__section-title">
            {t("BountyPayout.signees")}
          </p>
          <div className="signees__content">
            <div className="signees__title">
              {t("BountyPayout.approved-signees")} 1/2
            </div>
            <div className="signees__signee">
              <div className="signees__signee-number">1</div>
              <div className="signees__signee-content">
                2345fhgf345678909087654kjghfdssdfg
              </div>
            </div>
            <div className="signees__title">
              {t("BountyPayout.pending-signees")} 1/2
            </div>
            <div className="signees__signee">
              <div className="signees__signee-number">1</div>
              <div className="signees__signee-content">
                2345fhgf345678909087654kjghfdssdfg
              </div>
            </div>
          </div>
          <div className="signees__desc">{t("BountyPayout.signees-desc")}</div>
        </div>
      </section>
    </div >
  );
}