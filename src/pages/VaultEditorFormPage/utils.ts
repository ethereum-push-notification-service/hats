import { v4 as uuid } from "uuid";
import { ICommitteeMember, IVaultDescription } from "types/types";
import { getVulnerabilitySeveritiesTemplate } from "./severities";
import { IEditedContractCovered, IEditedVaultDescription, IEditedVulnerabilitySeverity } from "./types";

export const createNewCommitteeMember = (): ICommitteeMember => ({
  name: "",
  address: "",
  "twitter-link": "",
  "image-ipfs-link": "",
});

export const createNewCoveredContract = (severities?: IEditedVulnerabilitySeverity[]): IEditedContractCovered => {
  const severitiesIds = severities?.map((s) => s.id as string) || [];
  severitiesIds.sort();

  return {
    name: "",
    address: "",
    severities: severitiesIds,
  }
};

export const createNewVulnerabilitySeverity = (): IEditedVulnerabilitySeverity => ({
  id: uuid(),
  name: "",
  index: 0,
  "contracts-covered": [],
  "nft-metadata": {
    name: "",
    description: "",
    animation_url: "",
    image: "",
    external_url: "",
  },
  description: "",
});

export const createNewVaultDescription = (): IEditedVaultDescription => {
  const vulnerabilitySeveritiesTemplate = getVulnerabilitySeveritiesTemplate();

  return {
    "project-metadata": {
      name: "",
      icon: "",
      tokenIcon: "",
      website: "",
      type: "",
    },
    "communication-channel": {
      "pgp-pk": [],
    },
    committee: {
      "multisig-address": "",
      members: [{ ...createNewCommitteeMember() }],
    },
    "contracts-covered": [{ ...createNewCoveredContract(vulnerabilitySeveritiesTemplate.severities) }],
    "vulnerability-severities-spec": vulnerabilitySeveritiesTemplate,
    source: {
      name: "",
      url: "",
    },
  };
};

function severitiesToContractsCoveredForm(severities: IEditedVulnerabilitySeverity[]): IEditedContractCovered[] {
  let contractsForm = [] as IEditedContractCovered[];

  severities.forEach((severity) => {
    const contractsCovered = severity["contracts-covered"];

    if (contractsCovered && contractsCovered.length > 0) {
      contractsCovered.forEach((contractCovered) => {
        const name = Object.keys(contractCovered)[0];
        const address = Object.values(contractCovered)[0] as string;
        const contract = contractsForm.find((c) => c.name === name && c.address === address);

        if (contract) {
          const contractIndex = contractsForm.indexOf(contract);
          contractsForm[contractIndex] = {
            name,
            address,
            severities: [...contract.severities, severity.id as string],
          };
        } else {
          contractsForm.push({
            name,
            address,
            severities: [severity.id as string],
          });
        }
      });
    } else {
      contractsForm.push({
        ...createNewCoveredContract(),
        severities: [severity.id as string],
      });
    }
  });

  return contractsForm;
}

export function descriptionToEditedForm(vaultDescription: IVaultDescription): IEditedVaultDescription {
  const severitiesWithIds: IEditedVulnerabilitySeverity[] = vaultDescription.severities.map((sev) => ({ ...sev, id: uuid() }));

  return {
    ...vaultDescription,
    "communication-channel": {
      "pgp-pk": Array.isArray(vaultDescription["communication-channel"]["pgp-pk"])
        ? vaultDescription["communication-channel"]["pgp-pk"] :
        [vaultDescription["communication-channel"]["pgp-pk"]],
    },
    "vulnerability-severities-spec": {
      severities: severitiesWithIds,
      name: "",
      indexArray: vaultDescription.severities.map((item) => item.index),
    },
    "contracts-covered": severitiesToContractsCoveredForm(severitiesWithIds),
  };
}

export function editedFormToDescription(editedVaultDescription: IEditedVaultDescription): IVaultDescription {
  const vaultName = editedVaultDescription["project-metadata"].name;

  return {
    "project-metadata": editedVaultDescription["project-metadata"],
    "communication-channel": editedVaultDescription["communication-channel"],
    committee: editedVaultDescription.committee,
    source: editedVaultDescription.source,
    severities: editedVaultDescription["vulnerability-severities-spec"].severities.map((severity) => {
      const newSeverity = { ...severity };

      const severityId = newSeverity.id as string;
      if (newSeverity.id) delete newSeverity.id;

      return {
        ...newSeverity,
        "nft-metadata": {
          ...newSeverity["nft-metadata"],
          description: vaultName + newSeverity["nft-metadata"].description,
        },
        "contracts-covered": editedVaultDescription["contracts-covered"]
          .filter((contract) => contract.severities?.includes(severityId))
          .map((contract) => ({ [contract.name]: contract.address })),
      };
    }),
  };
}
