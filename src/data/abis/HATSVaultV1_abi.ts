export const HATSVaultV1_abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardsToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_rewardPerBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_multiplierPeriod",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_hatGovernance",
        type: "address",
      },
      {
        internalType: "contract ISwapRouter",
        name: "_uniSwapRouter",
        type: "address",
      },
      {
        internalType: "contract ITokenLockFactory",
        name: "_tokenLockFactory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_lpToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_committee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_descriptionHash",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_rewardsLevels",
        type: "uint256[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "hackerVestedReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hackerReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "committeeReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "swapAndBurn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "governanceHatReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hackerHatReward",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct HATMaster.RewardsSplit",
        name: "_rewardsSplit",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_rewardVestingDuration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_rewardVestingPeriods",
        type: "uint256",
      },
    ],
    name: "AddPool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_claimer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_descriptionHash",
        type: "string",
      },
    ],
    name: "Claim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_approver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
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
        name: "_severity",
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
            name: "hackerVestedReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hackerReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "committeeReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "swapAndBurn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "governanceHatReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hackerHatReward",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct HATVaults.ClaimReward",
        name: "_claimReward",
        type: "tuple",
      },
    ],
    name: "ClaimApprove",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EmergencyWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_previousGovernance",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_newGovernance",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_at",
        type: "uint256",
      },
    ],
    name: "GovernancePending",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_previousGovernance",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_newGovernance",
        type: "address",
      },
    ],
    name: "GovernorshipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromPid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_toPid",
        type: "uint256",
      },
    ],
    name: "MassUpdatePools",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_severity",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_approver",
        type: "address",
      },
    ],
    name: "PendingApprovalLog",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_rewardsLevels",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_timeStamp",
        type: "uint256",
      },
    ],
    name: "PendingRewardsLevelsLog",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "RewardDepositors",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "requestedAmount",
        type: "uint256",
      },
    ],
    name: "SendReward",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
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
        indexed: true,
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_periods",
        type: "uint256",
      },
    ],
    name: "SetHatVestingParams",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "_registered",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_descriptionHash",
        type: "string",
      },
    ],
    name: "SetPool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_rewardsLevels",
        type: "uint256[]",
      },
    ],
    name: "SetRewardsLevels",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "hackerVestedReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hackerReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "committeeReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "swapAndBurn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "governanceHatReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hackerHatReward",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct HATMaster.RewardsSplit",
        name: "_rewardsSplit",
        type: "tuple",
      },
    ],
    name: "SetRewardsSplit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
      {
        indexed: true,
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
        indexed: true,
        internalType: "uint256",
        name: "_withdrawPeriod",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_safetyPeriod",
        type: "uint256",
      },
    ],
    name: "SetWithdrawSafetyPeriod",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_amountSwaped",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_amountBurned",
        type: "uint256",
      },
    ],
    name: "SwapAndBurn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_amountSwaped",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amountReceived",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_tokenLock",
        type: "address",
      },
    ],
    name: "SwapAndSend",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        indexed: true,
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
    name: "HAT",
    outputs: [
      {
        internalType: "contract HATToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINIMUM_DEPOSIT",
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
    name: "MULTIPLIER_PERIOD",
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
    name: "REWARD_PER_BLOCK",
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
    name: "START_BLOCK",
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
    name: "TIME_LOCK_DELAY",
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
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_lpToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_committee",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_rewardsLevels",
        type: "uint256[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "hackerVestedReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hackerReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "committeeReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "swapAndBurn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "governanceHatReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hackerHatReward",
            type: "uint256",
          },
        ],
        internalType: "struct HATMaster.RewardsSplit",
        name: "_rewardsSplit",
        type: "tuple",
      },
      {
        internalType: "string",
        name: "_descriptionHash",
        type: "string",
      },
      {
        internalType: "uint256[2]",
        name: "_rewardVestingParams",
        type: "uint256[2]",
      },
    ],
    name: "addPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "approveClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_severity",
        type: "uint256",
      },
    ],
    name: "calcClaimRewards",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "hackerVestedReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hackerReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "committeeReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "swapAndBurn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "governanceHatReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hackerHatReward",
            type: "uint256",
          },
        ],
        internalType: "struct HATVaults.ClaimReward",
        name: "claimRewards",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_lastPoolUpdate",
        type: "uint256",
      },
    ],
    name: "calcPoolReward",
    outputs: [
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
    name: "claim",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "claimReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "committeeCheckIn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "committees",
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "dismissPendingApprovalClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "generalParameters",
    outputs: [
      {
        internalType: "uint256",
        name: "hatVestingDuration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "hatVestingPeriods",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "withdrawPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "safetyPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "setRewardsLevelsDelay",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "withdrawRequestEnablePeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "withdrawRequestPendingPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "claimFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDefaultRewardsSplit",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "hackerVestedReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hackerReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "committeeReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "swapAndBurn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "governanceHatReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hackerHatReward",
            type: "uint256",
          },
        ],
        internalType: "struct HATMaster.RewardsSplit",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getGlobalPoolUpdatesLength",
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
        name: "_from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_to",
        type: "uint256",
      },
    ],
    name: "getMultiplier",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
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
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "getPoolRewards",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "hackerVestedReward",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "hackerReward",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "committeeReward",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "swapAndBurn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "governanceHatReward",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "hackerHatReward",
                type: "uint256",
              },
            ],
            internalType: "struct HATMaster.RewardsSplit",
            name: "rewardsSplit",
            type: "tuple",
          },
          {
            internalType: "uint256[]",
            name: "rewardsLevels",
            type: "uint256[]",
          },
          {
            internalType: "bool",
            name: "committeeCheckIn",
            type: "bool",
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
        ],
        internalType: "struct HATMaster.PoolReward",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "getPoolRewardsLevels",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_to",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_totalAllocPoint",
        type: "uint256",
      },
    ],
    name: "getRewardForBlocksRange",
    outputs: [
      {
        internalType: "uint256",
        name: "reward",
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
        name: "_pid1",
        type: "uint256",
      },
    ],
    name: "getRewardPerBlock",
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
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getStakedAmount",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "globalPoolUpdates",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalAllocPoint",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governance",
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
        name: "",
        type: "address",
      },
    ],
    name: "governanceHatRewards",
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
    name: "governancePending",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "hackersHatRewards",
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
        name: "_fromPid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_toPid",
        type: "uint256",
      },
    ],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_severity",
        type: "uint256",
      },
    ],
    name: "pendingApprovalClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pendingApprovals",
    outputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "severity",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingReward",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "pendingRewardsLevels",
    outputs: [
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
        name: "",
        type: "uint256",
      },
    ],
    name: "poolDepositPause",
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
        name: "",
        type: "address",
      },
    ],
    name: "poolId1",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "lpToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardPerShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalUsersAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastProcessedTotalAllocPoint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolLength",
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
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "rewardDepositors",
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
    name: "setClaimFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
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
    inputs: [],
    name: "setGovernancePendingAt",
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
        name: "_duration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_periods",
        type: "uint256",
      },
    ],
    name: "setHatVestingParams",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newGovernance",
        type: "address",
      },
    ],
    name: "setPendingGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_rewardsLevels",
        type: "uint256[]",
      },
    ],
    name: "setPendingRewardsLevels",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_registered",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_depositPause",
        type: "bool",
      },
      {
        internalType: "string",
        name: "_descriptionHash",
        type: "string",
      },
    ],
    name: "setPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "setRewardsLevels",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_delay",
        type: "uint256",
      },
    ],
    name: "setRewardsLevelsDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "hackerVestedReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hackerReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "committeeReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "swapAndBurn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "governanceHatReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hackerHatReward",
            type: "uint256",
          },
        ],
        internalType: "struct HATMaster.RewardsSplit",
        name: "_rewardsSplit",
        type: "tuple",
      },
    ],
    name: "setRewardsSplit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
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
        name: "_withdrawRequestPendingPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_withdrawRequestEnablePeriod",
        type: "uint256",
      },
    ],
    name: "setWithdrawRequestParams",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_withdrawPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_safetyPeriod",
        type: "uint256",
      },
    ],
    name: "setWithdrawSafetyPeriod",
    outputs: [],
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
    name: "swapAndBurns",
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
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountOutMinimum",
        type: "uint256",
      },
      {
        internalType: "uint24[2]",
        name: "_fees",
        type: "uint24[2]",
      },
    ],
    name: "swapBurnSend",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "transferGovernorship",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "uniSwapRouter",
    outputs: [
      {
        internalType: "contract ISwapRouter",
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
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
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_shares",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "withdrawRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "withdrawRequests",
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
