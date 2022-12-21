import { useEffect } from "react";
import { Controller, useWatch } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useEnhancedFormContext } from "hooks/useEnhancedFormContext";
import { getPath } from "utils/objects.utils";
import { FormInput, FormIconInput, FormDateInput } from "components";
import { IEditedVaultDescription } from "../types";
import { StyledVaultDetails } from "./styles";

export function VaultDetailsForm() {
  const { t } = useTranslation();
  const { register, control, resetField, setValue } = useEnhancedFormContext<IEditedVaultDescription>();

  const showDateInputs = useWatch({ control, name: "includesStartAndEndTime" });

  useEffect(() => {
    if (showDateInputs) {
      resetField("project-metadata.starttime");
      resetField("project-metadata.endtime");
    } else {
      setValue("project-metadata.starttime", undefined);
      setValue("project-metadata.endtime", undefined);
    }
  }, [showDateInputs, setValue, resetField]);

  return (
    <StyledVaultDetails>
      <div className="sub-container">
        <div className="inputs">
          <FormInput
            {...register("project-metadata.name")}
            label={t("VaultEditor.vault-details.name")}
            colorable
            placeholder={t("VaultEditor.vault-details.name-placeholder")}
          />
          <FormInput
            {...register("project-metadata.type")}
            colorable
            placeholder={t("VaultEditor.vault-details.type-placeholder")}
            label={t("VaultEditor.vault-details.type")}
          />
          <FormInput
            {...register("project-metadata.website")}
            colorable
            placeholder={t("VaultEditor.vault-details.website-placeholder")}
            label={t("VaultEditor.vault-details.website")}
          />
        </div>

        <div className="icons">
          <div className="icons__input">
            <FormIconInput {...register("project-metadata.icon")} colorable label={t("VaultEditor.vault-details.icon")} />
          </div>
          <div className="icons__input">
            <FormIconInput
              {...register("project-metadata.tokenIcon")}
              colorable
              label={t("VaultEditor.vault-details.token-icon")}
            />
          </div>
        </div>
      </div>

      <FormInput {...register("includesStartAndEndTime")} type="checkbox" label={t("VaultEditor.addStartAndEndDate")} />

      {showDateInputs && (
        <div className="dates-container">
          <Controller
            control={control}
            name={`project-metadata.starttime`}
            render={({ field, formState }) => (
              <FormDateInput
                withTime
                isDirty={getPath(formState.dirtyFields, field.name)}
                error={getPath(formState.errors, field.name)}
                label={t("VaultEditor.vault-details.starttime")}
                placeholder={t("VaultEditor.vault-details.starttime-placeholder")}
                colorable
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name={`project-metadata.endtime`}
            render={({ field, formState }) => (
              <FormDateInput
                withTime
                isDirty={getPath(formState.dirtyFields, field.name)}
                error={getPath(formState.errors, field.name)}
                label={t("VaultEditor.vault-details.endtime")}
                placeholder={t("VaultEditor.vault-details.endtime-placeholder")}
                colorable
                {...field}
              />
            )}
          />
        </div>
      )}
    </StyledVaultDetails>
  );
}
