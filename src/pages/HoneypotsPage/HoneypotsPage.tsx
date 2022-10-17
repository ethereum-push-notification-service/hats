import React, { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { formatUnits } from "ethers/lib/utils";
import { IVault } from "types/types";
import { useVaults } from "hooks/useVaults";
import { ipfsTransformUri } from "utils";
import { useTranslation } from "react-i18next";
import { RoutePaths } from "navigation";
import SearchIcon from "assets/icons/search.icon";
import Loading from "../../components/Shared/Loading";
import Modal from "../../components/Shared/Modal";
import Vault from "../../components/Vault/Vault";
import DepositWithdraw from "../../components/DepositWithdraw/DepositWithdraw";
import SafePeriodBar from "../../components/SafePeriodBar/SafePeriodBar";
import { StyledHoneypotsPage } from "./styles";

interface HoneypotsPageProps {
  showDeposit?: boolean
}

const HoneypotsPage = ({ showDeposit }: HoneypotsPageProps) => {
  const { t } = useTranslation();
  const { vaults, tokenPrices } = useVaults();
  const [expanded, setExpanded] = useState();
  const [userSearch, setUserSearch] = useState("");
  const { pid } = useParams();
  const selectedVault = pid ? vaults?.find(v => v.pid === pid) : undefined;
  const navigate = useNavigate();

  const vaultValue = useCallback((vault: IVault) => {
    const { honeyPotBalance, stakingTokenDecimals } = vault;
    const tokenPrice = tokenPrices?.[vault.stakingToken];
    return tokenPrice ? Number(formatUnits(honeyPotBalance, stakingTokenDecimals)) * tokenPrice : 0;
  }, [tokenPrices])

  const closeModal = () => navigate(`${RoutePaths.vaults}`);

  const scrollRef = (element) => {
    if (element) element.scrollIntoView();
  }

  const sortedVaults = vaults?.sort((a: IVault, b: IVault) => vaultValue(b) - vaultValue(a))
  const vaultsMatchSearch = sortedVaults?.filter(vault =>
    vault.description?.["project-metadata"].name.toLowerCase()
      .includes(userSearch.toLowerCase()));

  const normalVaultKey: string = ''

  const vaultsByGroup = vaultsMatchSearch?.reduce((groups, vault) => {
    if (vault.registered) {
      const key = vault.description?.["project-metadata"].type || normalVaultKey;
      (groups[key] = groups[key] || []).push(vault);
    }
    return groups;
  }, [] as IVault[][])!

  function capitalizeFirstLetter(val: string) {
    return val.charAt(0).toUpperCase() + val.slice(1);
  }

  return (
    <StyledHoneypotsPage className="content-wrapper">
      {vaults === undefined ? <Loading fixed /> :
        <table>
          <tbody>
            <SafePeriodBar />
            <tr>
              <th colSpan={2} className="search-cell" >
                <div className="search-wrapper">
                  <SearchIcon />
                  <input
                    type="text"
                    value={userSearch}
                    onChange={(e) => setUserSearch(e.target.value)}
                    className="search-input"
                    placeholder={t("Honeypots.search-placeholder")} />
                </div>
              </th>
              <th className="onlyDesktop">TOTAL VAULT</th>
              <th className="onlyDesktop">APY</th>
              <th className="onlyDesktop"></th>
            </tr>
            {/* Bounty vaults should be last - we assume bounty vaults type is "" */}
            {vaultsByGroup && Object.entries(vaultsByGroup).sort().reverse().map(([type, vaults]) =>
              <React.Fragment key={type}>
                <tr className="transparent-row">
                  <td colSpan={7}>{type === normalVaultKey ? t("Honeypots.bounty") : capitalizeFirstLetter(type)} {t("Honeypots.vaults")}</td>
                </tr>
                {vaults && vaults.map(vault =>
                  <Vault
                    ref={vault.pid === pid ? scrollRef : null}
                    expanded={expanded === vault}
                    setExpanded={setExpanded}
                    key={vault.id}
                    data={vault} />
                )}
              </React.Fragment>
            )}
          </tbody>
        </table>}
      {
        showDeposit && selectedVault &&
        <Modal
          title={selectedVault.description?.["project-metadata"].name!}
          setShowModal={closeModal}
          height="fit-content"
          maxHeight="100vh"
          icon={ipfsTransformUri(selectedVault.description?.["project-metadata"].icon!)}>
          <DepositWithdraw data={selectedVault!} setShowModal={closeModal} />
        </Modal>
      }
    </StyledHoneypotsPage>
  )
}

export { HoneypotsPage };