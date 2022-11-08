import { ICommitteeMember, IVulnerabilitySeverity } from "types/types";

export interface IVulnerabilitySeveritiesTemplate {
  severities: IEditedVulnerabilitySeverity[];
  name: string;
  indexArray: number[];
}

export interface IEditedContractCovered {
  name: string;
  address: string;
  severities: string[]; // IVulnerabilitySeverity.name
}

export type IEditedVulnerabilitySeverity = IVulnerabilitySeverity & { id?: string };

export interface IEditedVaultDescription {
  "project-metadata": {
    icon: string;
    website: string;
    name: string;
    tokenIcon: string;
    type?: string;
    endtime?: number;
    starttime?: number;
  };
  "communication-channel": {
    "pgp-pk": string[];
  };
  committee: {
    "multisig-address": string;
    members: Array<ICommitteeMember>;
  };
  "vulnerability-severities-spec": IVulnerabilitySeveritiesTemplate;
  "contracts-covered": IEditedContractCovered[];
  source: {
    name: string;
    url: string;
  };
  "additional-vaults"?: string[];
}
