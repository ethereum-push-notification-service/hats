import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { FormProvider, useFieldArray, useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  createNewCommitteeMember,
  createNewVaultDescription,
  IEditedSessionResponse,
  convertVulnerabilitySeverityV1ToV2,
  editedFormToCreateVaultOnChainCall,
} from "@hats-finance/shared";
import { CreateVaultContract } from "contracts";
import { getGnosisSafeInfo } from "utils/gnosis.utils";
import { isValidIpfsHash } from "utils/ipfs.utils";
import { BASE_SERVICE_URL } from "settings";
import { RoutePaths } from "navigation";
import { Button, Loading } from "components";
import * as VaultService from "./vaultService";
import { IEditedVaultDescription, IEditedVulnerabilitySeverityV1 } from "types";
import { getEditedDescriptionYupSchema } from "./formSchema";
import { useVaultEditorSteps } from "./useVaultEditorSteps";
import { AllEditorSections } from "./steps";
import { VaultEditorFormContext } from "./store";
import {
  Section,
  VaultEditorForm,
  VaultEditorStepController,
  VaultEditorSectionController,
  VaultEditorStepper,
  StyledVaultEditorContainer,
} from "./styles";
import BackIcon from "@mui/icons-material/ArrowBack";
import NextIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";
import { useAccount } from "wagmi";

const VaultEditorFormPage = () => {
  const { t } = useTranslation();
  const { address } = useAccount();

  const { editSessionId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const isAdvancedMode = searchParams.get("mode")?.includes("advanced") ?? false;

  const [descriptionHash, setDescriptionHash] = useState<string | undefined>(undefined);
  const [loadingEditSession, setLoadingEditSession] = useState(false);
  const [creatingVault, setCreatingVault] = useState(false);

  const test = () => {
    // removeMembers();
    // committeeMembersFieldArray.append(createNewCommitteeMember());
    console.log(getValues());
  };

  const methods = useForm<IEditedVaultDescription>({
    resolver: yupResolver(getEditedDescriptionYupSchema(t)),
    mode: "onChange",
  });

  const { formState, reset: handleReset, control, setValue, getValues } = methods;
  const committeeMembersFieldArray = useFieldArray({ control: control, name: "committee.members" });
  const vaultVersion = useWatch({ control, name: "version" });

  const {
    steps,
    sections,
    currentStepInfo,
    currentSectionInfo,
    onGoToStep,
    onGoBack,
    onGoNext,
    onGoToSection,
    initFormSteps,
    loadingSteps,
  } = useVaultEditorSteps(methods, {
    saveData: () => createOrSaveEditSession(),
    onFinalSubmit: () => createVaultOnChain(),
    executeOnSaved: (sectionId, stepNumber) => {
      const committeeSectionId = "setup";
      const committeeStepId = "committee";
      const committeeStepNumber = AllEditorSections[committeeSectionId].steps.findIndex((step) => step.id === committeeStepId);

      if (sectionId === "setup" && stepNumber === committeeStepNumber) recalculateCommitteeMembers(sectionId, stepNumber);
    },
  });

  const createOrSaveEditSession = async (isCreation = false, withIpfsHash = false) => {
    if (isCreation) setLoadingEditSession(true);

    let sessionIdOrSessionResponse: string | IEditedSessionResponse;

    if (isCreation) {
      sessionIdOrSessionResponse = await VaultService.upsertEditSession(
        undefined,
        undefined,
        withIpfsHash ? editSessionId : undefined
      );
    } else {
      const data: IEditedVaultDescription = getValues();
      sessionIdOrSessionResponse = await VaultService.upsertEditSession(data, editSessionId);
    }

    if (typeof sessionIdOrSessionResponse === "string") {
      navigate(`${RoutePaths.vault_editor}/${sessionIdOrSessionResponse}`, { replace: true });
    } else {
      setDescriptionHash(sessionIdOrSessionResponse.descriptionHash);
      handleReset(sessionIdOrSessionResponse.editedDescription, { keepDefaultValues: true, keepErrors: true, keepDirty: true });
    }

    setLoadingEditSession(false);
  };

  async function loadEditSessionData(editSessionId: string) {
    try {
      setLoadingEditSession(true);

      const editSessionResponse = await VaultService.getEditSessionData(editSessionId);

      setDescriptionHash(editSessionResponse.descriptionHash);
      handleReset(editSessionResponse.editedDescription);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingEditSession(false);
    }
  }

  const createVaultOnChain = async () => {
    try {
      const data: IEditedVaultDescription = getValues();
      if (!descriptionHash) return;
      if (!data.committee.chainId) return;

      setCreatingVault(true);
      const vaultOnChainCall = editedFormToCreateVaultOnChainCall(data, descriptionHash);

      const createdVaultData = await CreateVaultContract.send(vaultOnChainCall);
      console.log(createdVaultData);

      if (createdVaultData) {
        const vaultAddress = await VaultService.onVaultCreated(createdVaultData.hash, +data.committee.chainId);
        console.log(vaultAddress);
        setCreatingVault(false);
      }
    } catch (error) {
      console.error(error);
      setCreatingVault(false);
    }
  };

  useEffect(() => {
    initFormSteps();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingEditSession]);

  useEffect(() => {
    if (editSessionId) {
      if (editSessionId === "new-vault") {
        createOrSaveEditSession(true);
      } else {
        const isIpfsHash = isValidIpfsHash(editSessionId);
        if (isIpfsHash) {
          createOrSaveEditSession(true, isIpfsHash);
        } else {
          loadEditSessionData(editSessionId);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editSessionId]);

  useEffect(() => {
    const dirtyFields = Object.keys(formState.dirtyFields);
    if (!dirtyFields.includes("version")) return;

    const onlyVersionDirty = dirtyFields.length === 1 && dirtyFields[0] === "version";

    // If it's a new and clean form description in v1
    if (!editSessionId && onlyVersionDirty) {
      handleReset(createNewVaultDescription(vaultVersion));
    }

    // Changing from v2 to v1 is not supported
    if (vaultVersion === "v1") return;

    // If it's not a clean form description
    if (editSessionId || (!editSessionId && !onlyVersionDirty)) {
      const indexArray = getValues("vulnerability-severities-spec.indexArray");
      const currentSeverities = getValues("vulnerability-severities-spec.severities") as IEditedVulnerabilitySeverityV1[];

      const newSeverities = currentSeverities.map((s) => convertVulnerabilitySeverityV1ToV2(s, indexArray));
      setValue("vulnerability-severities-spec.severities", newSeverities, { shouldDirty: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vaultVersion]);

  const recalculateCommitteeMembers = async (sectionId: string, stepNumber: number) => {
    const committeeSafeAddress = getValues("committee.multisig-address");
    const committeeSafeAddressChainId = getValues("committee.chainId");
    if (!committeeSafeAddress) return;

    const multisigInfo = await getGnosisSafeInfo(
      committeeSafeAddress,
      committeeSafeAddressChainId ? +committeeSafeAddressChainId : undefined
    );

    let committeeMembers = [...getValues("committee.members")];
    const newAddressesToAdd = multisigInfo.owners.filter((owner) => !committeeMembers.some((member) => member.address === owner));

    const isANewMultisig = !committeeMembers.some((member) => member.linkedMultisigAddress === committeeSafeAddress);
    if (!isANewMultisig) return;

    // Update linkedMultisigAddress based on the new multisig owners. And save the members that are not part of the multisig
    // anymore to move them to the end of the list
    const indexesToMoveToTheEnd: number[] = [];
    for (const [idx, member] of committeeMembers.entries()) {
      if (multisigInfo.owners.includes(member.address)) {
        committeeMembersFieldArray.update(idx, { ...member, linkedMultisigAddress: committeeSafeAddress });
      } else {
        committeeMembersFieldArray.update(idx, { ...member, linkedMultisigAddress: "" });
        indexesToMoveToTheEnd.push(idx);
      }
    }

    // Add new members to the list
    if (newAddressesToAdd.length > 0) {
      committeeMembersFieldArray.prepend(
        [...newAddressesToAdd.map((address) => createNewCommitteeMember(address, committeeSafeAddress))],
        { shouldFocus: false }
      );
    }

    // Move members that are not part of the multisig anymore to the end of the list
    let moved = 0;
    for (const idx of indexesToMoveToTheEnd) {
      committeeMembersFieldArray.move(idx - moved, committeeMembers.length - 1);
      moved++;
    }

    createOrSaveEditSession();
  };

  const goToDescriptionHashContent = () => {
    window.open(`${BASE_SERVICE_URL}/ipfs/${descriptionHash}`, "_blank");
  };

  const getNextButtonDisabled = () => {
    const { disabledOptions } = currentStepInfo;

    if (disabledOptions?.includes("needsAccount")) {
      if (!address) return t("youNeedToConnectToAWallet");
      return false;
    }
    return false;
  };

  const getNextButtonAction = () => {
    const isDisabled = getNextButtonDisabled();

    if (isDisabled) return () => {};
    return () => onGoNext.go();
  };

  if (loadingEditSession || loadingSteps) return <Loading fixed extraText={`${t("loadingVaultEditor")}...`} />;

  const vaultEditorFormContext = { editSessionId, committeeMembersFieldArray, saveEditSessionData: createOrSaveEditSession };

  return (
    <VaultEditorFormContext.Provider value={vaultEditorFormContext}>
      <StyledVaultEditorContainer>
        <FormProvider {...methods}>
          <button type="button" className="mb-5" onClick={test}>
            Show form
          </button>

          <div className="sections-controller">
            {sections.map((section, idx) => (
              <VaultEditorSectionController
                key={section.id}
                onClick={() => onGoToSection(section.id)}
                active={idx === sections.findIndex((sec) => sec.id === currentSectionInfo.id)}
              >
                <p>{t(section.name)}</p>
                {idx < sections.length - 1 && <span>&gt;</span>}
              </VaultEditorSectionController>
            ))}
          </div>

          <VaultEditorForm className="content-wrapper">
            {/* Title */}
            {descriptionHash && isAdvancedMode && (
              <p className="descriptionHash" onClick={goToDescriptionHashContent}>
                <strong>{t("descriptionHash")}:</strong> {descriptionHash}
              </p>
            )}
            <div className="editor-title">
              <div className="title">
                {/* <ArrowBackIcon /> */}
                <p>
                  {t(currentSectionInfo.title)}
                  <span>/{t(currentStepInfo.name)}</span>
                </p>
              </div>
            </div>
            {/* Steps control */}
            <VaultEditorStepper>
              {steps
                .filter((step) => !step.isInvisible)
                .map((step, index) => (
                  <VaultEditorStepController
                    key={step.id}
                    active={step.id === currentStepInfo.id}
                    passed={!!step.isValid}
                    onClick={() => onGoToStep(index)}
                  >
                    {step.isValid && <CheckIcon className="ml-2" />}
                    {step.isValid ? "" : `${index + 1}.`}
                    {t(step.name)}
                  </VaultEditorStepController>
                ))}
            </VaultEditorStepper>
            {/* Section */}
            {steps.map((step) => (
              <Section key={step.id} visible={step.id === currentStepInfo.id}>
                <p className="section-title">{t(step.title)}</p>
                <div className="section-content">
                  <step.component />
                </div>
              </Section>
            ))}
            {/* Action buttons */}
            <div className="buttons-container">
              <div>
                <Button disabled={!!getNextButtonDisabled()} onClick={getNextButtonAction()}>
                  {onGoNext.text} <NextIcon className="ml-2" />
                </Button>
                <span>{getNextButtonDisabled()}</span>
              </div>
              {onGoBack && (
                <Button styleType="invisible" onClick={() => onGoBack.go()}>
                  <BackIcon className="mr-2" /> {onGoBack.text}
                </Button>
              )}
            </div>
          </VaultEditorForm>
        </FormProvider>
      </StyledVaultEditorContainer>
      {creatingVault && <Loading fixed extraText={`${t("cretingVaultOnChain")}...`} />}
    </VaultEditorFormContext.Provider>
  );
};

export { VaultEditorFormPage };
