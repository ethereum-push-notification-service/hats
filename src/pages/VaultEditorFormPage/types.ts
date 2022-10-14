import { ICommitteeMember, IVulnerabilitySeverity } from "types/types";

export interface ISeveritiesTemplate {
    severities: IVulnerabilitySeverity[]
    name: string
    indexArray: number[]
}

export interface IEditedContractCovered {
    name: string,
    address: string,
    severities: string[] // IVulnerabilitySeverity.name
}

export interface IEditedVaultDescription {
    "project-metadata": {
        icon: string
        website: string
        name: string
        tokenIcon: string
        type?: string
        endtime?: number
        starttime?: number
    }
    "communication-channel": {
        "pgp-pk": string | string[],
    }
    "committee": {
        "multisig-address": string
        "members": Array<ICommitteeMember>
    },
    "severitiesTemplate": ISeveritiesTemplate,
    "contracts-covered": IEditedContractCovered[]
    "source": {
        name: string
        url: string
    }
    "additional-vaults"?: string[];
}
