import { gql } from "apollo-boost";

export const GET_VAULTS = gql`
  {
    vaults {
      id
      pid
      name
      stakingToken
      totalStaking
      totalReward
      totalRewardPaid
      committee
      allocPoint
      master {
        address
        numberOfSubmittedClaims
        withdrawPeriod
        safetyPeriod
        withdrawRequestEnablePeriod
        withdrawRequestPendingPeriod
      }
      numberOfApprovedClaims
      rewardsLevels
      rewardsSplit
      totalRewardAmount
      liquidityPool
      description
      honeyPotBalance
      registered
      withdrawRequests {
        id
        beneficiary
        withdrawEnableTime
        createdAt
        expiryTime
      }
    }
  }
`;

export const GET_STAKERS = gql`
  {
    stakers {
      id
      pid
      createdAt
      address
      amount
      rewardPaid
      vault {
        id
      }
    }
  }
`;

// rewardsToken is the HAT token
export const GET_MASTER_DATA = gql`
  {
    masters {
      rewardsToken
      withdrawPeriod
      safetyPeriod
    }
  }
`

export const getStakerByAddress = (stakerAddress: string) => {
  return gql`
    {
      stakers (where: { address: "${stakerAddress}" }) {
        id
        createdAt
        amount
        rewardPaid
        vault {
          id
        }
      }
    }
  `;
}

export const getStakerData = (vaultID: string, stakerAddress: string) => {
  return gql`
    {
      stakers (where: { vault: "${vaultID}", address: "${stakerAddress}" }) {
        amount
      }
    }
  `;
}

export const getStakerAmounts = (stakerAddress: string) => {
  return gql`
    {
      stakers (where: { address: "${stakerAddress}" }) {
        amount
        vault {
          stakingToken
        }
      }
    }
  `;
}

export const getBeneficiaryWithdrawRequests = (pid: string, beneficiary: string) => {
  return gql`
    {
      vaults (where: { pid: "${pid}" }) {
        withdrawRequests(where: { beneficiary: "${beneficiary}" }) {
          id
          beneficiary
          withdrawEnableTime
          createdAt
          expiryTime
        }
      }
    }
  `;
}
