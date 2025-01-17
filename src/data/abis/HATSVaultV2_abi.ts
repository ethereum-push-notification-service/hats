export const HATSVaultV2_abi = [
  {
    inputs: [],
    name: "ActiveClaimExists",
    type: "error",
  },
  {
    inputs: [],
    name: "AmountCannotBeZero",
    type: "error",
  },
  {
    inputs: [],
    name: "BountyPercentageHigherThanMaxBounty",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotSetToPerviousRewardController",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotTransferToAnotherUserWithActiveWithdrawRequest",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotTransferToSelf",
    type: "error",
  },
  {
    inputs: [],
    name: "ChallengePeriodEnded",
    type: "error",
  },
  {
    inputs: [],
    name: "ChallengedClaimCanOnlyBeApprovedByArbitratorUntilChallengeTimeoutPeriod",
    type: "error",
  },
  {
    inputs: [],
    name: "ClaimAlreadyChallenged",
    type: "error",
  },
  {
    inputs: [],
    name: "ClaimExpired",
    type: "error",
  },
  {
    inputs: [],
    name: "ClaimIdIsNotActive",
    type: "error",
  },
  {
    inputs: [],
    name: "CommitteeAlreadyCheckedIn",
    type: "error",
  },
  {
    inputs: [],
    name: "CommitteeBountyCannotBeMoreThanMax",
    type: "error",
  },
  {
    inputs: [],
    name: "CommitteeNotCheckedInYet",
    type: "error",
  },
  {
    inputs: [],
    name: "DelayPeriodForSettingMaxBountyHadNotPassed",
    type: "error",
  },
  {
    inputs: [],
    name: "MaxBountyCannotBeMoreThanMaxBountyLimit",
    type: "error",
  },
  {
    inputs: [],
    name: "NoActiveClaimExists",
    type: "error",
  },
  {
    inputs: [],
    name: "NoPendingMaxBounty",
    type: "error",
  },
  {
    inputs: [],
    name: "NotEnoughFeePaid",
    type: "error",
  },
  {
    inputs: [],
    name: "NotEnoughUserBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "NotSafetyPeriod",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyArbitratorOrRegistryOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyCallableByArbitratorOrAfterChallengeTimeOutPeriod",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyCallableIfChallenged",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyCommittee",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyFeeSetter",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyRegistryOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "RedeemMoreThanMax",
    type: "error",
  },
  {
    inputs: [],
    name: "SafetyPeriod",
    type: "error",
  },
  {
    inputs: [],
    name: "SetSharesArraysMustHaveSameLength",
    type: "error",
  },
  {
    inputs: [],
    name: "SystemInEmergencyPause",
    type: "error",
  },
  {
    inputs: [],
    name: "TotalSplitPercentageShouldBeHundredPercent",
    type: "error",
  },
  {
    inputs: [],
    name: "UnchallengedClaimCanOnlyBeApprovedAfterChallengePeriod",
    type: "error",
  },
  {
    inputs: [],
    name: "VestingDurationSmallerThanPeriods",
    type: "error",
  },
  {
    inputs: [],
    name: "VestingDurationTooLong",
    type: "error",
  },
  {
    inputs: [],
    name: "VestingPeriodsCannotBeZero",
    type: "error",
  },
  {
    inputs: [],
    name: "WithdrawMustBeGreaterThanZero",
    type: "error",
  },
  {
    inputs: [],
    name: "WithdrawalFeeTooBig",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_claimId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_committee",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_bountyPercentage",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_tokenLock",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "hacker",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hackerVested",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "committee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hackerHatVested",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "governanceHat",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct IHATVault.ClaimBounty",
        name: "_claimBounty",
        type: "tuple",
      },
    ],
    name: "ApproveClaim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_claimId",
        type: "bytes32",
      },
    ],
    name: "ChallengeClaim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "CommitteeCheckedIn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_claimId",
        type: "bytes32",
      },
    ],
    name: "DismissClaim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_arbitrator",
        type: "address",
      },
    ],
    name: "SetArbitrator",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum IHATVault.ArbitratorCanChangeBounty",
        name: "_arbitratorCanChangeBounty",
        type: "uint8",
      },
    ],
    name: "SetArbitratorCanChangeBounty",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "hackerVested",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hacker",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "committee",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct IHATVault.BountySplit",
        name: "_bountySplit",
        type: "tuple",
      },
    ],
    name: "SetBountySplit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_challengePeriod",
        type: "uint256",
      },
    ],
    name: "SetChallengePeriod",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_challengeTimeOutPeriod",
        type: "uint256",
      },
    ],
    name: "SetChallengeTimeOutPeriod",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_committee",
        type: "address",
      },
    ],
    name: "SetCommittee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "_depositPause",
        type: "bool",
      },
    ],
    name: "SetDepositPause",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_bountyGovernanceHAT",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_bountyHackerHATVested",
        type: "uint256",
      },
    ],
    name: "SetHATBountySplit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_maxBounty",
        type: "uint256",
      },
    ],
    name: "SetMaxBounty",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_maxBounty",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_timeStamp",
        type: "uint256",
      },
    ],
    name: "SetPendingMaxBounty",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IRewardController",
        name: "_newRewardController",
        type: "address",
      },
    ],
    name: "SetRewardController",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_descriptionHash",
        type: "string",
      },
    ],
    name: "SetVaultDescription",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_periods",
        type: "uint256",
      },
    ],
    name: "SetVestingParams",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_newFee",
        type: "uint256",
      },
    ],
    name: "SetWithdrawalFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_claimId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_committee",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_bountyPercentage",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_descriptionHash",
        type: "string",
      },
    ],
    name: "SubmitClaim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_withdrawEnableTime",
        type: "uint256",
      },
    ],
    name: "WithdrawRequest",
    type: "event",
  },
  {
    inputs: [],
    name: "HUNDRED_PERCENT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "HUNDRED_PERCENT_SQRD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_BOUNTY_LIMIT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_COMMITTEE_BOUNTY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_WITHDRAWAL_FEE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NULL_ADDRESS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NULL_UINT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "activeClaim",
    outputs: [
      {
        internalType: "bytes32",
        name: "claimId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "bountyPercentage",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "committee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "createdAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "challengedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bountyGovernanceHAT",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bountyHackerHATVested",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "arbitrator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "challengePeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "challengeTimeOutPeriod",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "arbitratorCanChangeBounty",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_claimId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_bountyPercentage",
        type: "uint256",
      },
    ],
    name: "approveClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "asset",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bountySplit",
    outputs: [
      {
        internalType: "uint256",
        name: "hackerVested",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "hacker",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "committee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_claimId",
        type: "bytes32",
      },
    ],
    name: "challengeClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "committee",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "committeeCheckIn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "committeeCheckedIn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "convertToAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
    ],
    name: "convertToShares",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositPause",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_claimId",
        type: "bytes32",
      },
    ],
    name: "dismissClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "emergencyWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getArbitrator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getArbitratorCanChangeBounty",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBountyGovernanceHAT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBountyHackerHATVested",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getChallengePeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getChallengeTimeOutPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IRewardController",
            name: "rewardController",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "vestingDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "vestingPeriods",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxBounty",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "hackerVested",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "hacker",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "committee",
                type: "uint256",
              },
            ],
            internalType: "struct IHATVault.BountySplit",
            name: "bountySplit",
            type: "tuple",
          },
          {
            internalType: "contract IERC20",
            name: "asset",
            type: "address",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "committee",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isPaused",
            type: "bool",
          },
          {
            internalType: "string",
            name: "descriptionHash",
            type: "string",
          },
        ],
        internalType: "struct IHATVault.VaultInitParams",
        name: "_params",
        type: "tuple",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "maxBounty",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "maxDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "maxMint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "maxRedeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "maxWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingMaxBounty",
    outputs: [
      {
        internalType: "uint256",
        name: "maxBounty",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
    ],
    name: "previewDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "previewMint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "previewRedeem",
    outputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "previewRedeemAndFee",
    outputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
    ],
    name: "previewWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
    ],
    name: "previewWithdrawAndFee",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "redeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "redeemAndClaim",
    outputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "registry",
    outputs: [
      {
        internalType: "contract HATVaultsRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardController",
    outputs: [
      {
        internalType: "contract IRewardController",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "rewardControllerRemoved",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_arbitrator",
        type: "address",
      },
    ],
    name: "setArbitrator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IHATVault.ArbitratorCanChangeBounty",
        name: "_arbitratorCanChangeBounty",
        type: "uint8",
      },
    ],
    name: "setArbitratorCanChangeBounty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "hackerVested",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hacker",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "committee",
            type: "uint256",
          },
        ],
        internalType: "struct IHATVault.BountySplit",
        name: "_bountySplit",
        type: "tuple",
      },
    ],
    name: "setBountySplit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_challengePeriod",
        type: "uint256",
      },
    ],
    name: "setChallengePeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_challengeTimeOutPeriod",
        type: "uint256",
      },
    ],
    name: "setChallengeTimeOutPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_committee",
        type: "address",
      },
    ],
    name: "setCommittee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_depositPause",
        type: "bool",
      },
    ],
    name: "setDepositPause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_bountyGovernanceHAT",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_bountyHackerHATVested",
        type: "uint256",
      },
    ],
    name: "setHATBountySplit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setMaxBounty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxBounty",
        type: "uint256",
      },
    ],
    name: "setPendingMaxBounty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IRewardController",
        name: "_newRewardController",
        type: "address",
      },
    ],
    name: "setRewardController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_descriptionHash",
        type: "string",
      },
    ],
    name: "setVaultDescription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_periods",
        type: "uint256",
      },
    ],
    name: "setVestingParams",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "setWithdrawalFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_bountyPercentage",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_descriptionHash",
        type: "string",
      },
    ],
    name: "submitClaim",
    outputs: [
      {
        internalType: "bytes32",
        name: "claimId",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenLockFactory",
    outputs: [
      {
        internalType: "contract ITokenLockFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vestingDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vestingPeriods",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "withdrawAndClaim",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "withdrawEnableStartTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawalFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
