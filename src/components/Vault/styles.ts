import styled, { css } from "styled-components";
import { breakpointsDefinition } from "styles/breakpoints.styles";

type StyledVaultProps = {
  type?: string;
  selectionMode?: boolean;
  selected?: boolean;
};

export const StyledVault = styled.tr<StyledVaultProps>(
  ({ type, selectionMode, selected }) => css`
    scroll-margin-top: var(--header-height) * 2;
    border-bottom: 2px solid var(--dark-blue);
    position: relative;

    ${selectionMode &&
    css`
      transition: 0.3s;
      cursor: ${selectionMode ? "pointer" : "default"};

      &:hover {
        opacity: 0.7;
      }
    `}

    td {
      padding: 15px;
      background-color: ${selectionMode ? `var(--field-blue)` : `var(--strong-blue)`};
      filter: ${selected ? `contrast(0.9)` : `contrast(1)`};

      &.relative-column {
        position: relative;
      }

      &:first-child {
        position: relative;
      }

      ${type === "gamification" &&
      css`
        background-color: var(--strong-purple);
      `}

      ${type === "grants" &&
      css`
        background-color: var(--turquoise-2);
      `}
    }

    .project-name-wrapper {
      display: flex;
      align-items: center;

      @media (max-width: ${breakpointsDefinition.mobile}) {
        margin-left: 30px;
      }

      .vault-icon {
        position: relative;

        img.logo {
          width: 45px;
          margin-right: 15px;
          border-radius: 100px;
        }

        .chain-logo {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          bottom: 0px;
          right: 8px;
          width: 26px;
          height: 26px;
          border-radius: 100px;
          background-color: ${selectionMode ? `var(--field-blue)` : `var(--strong-blue)`};

          ${type === "gamification" &&
          css`
            background-color: ${selectionMode ? `var(--field-blue)` : `var(--strong-purple)`};
          `}

          ${type === "grants" &&
          css`
            background-color: ${selectionMode ? `var(--field-blue)` : `var(--turquoise-2)`};
          `}

          img {
            width: 22px;
            height: 22px;
            object-fit: contain;
            border-radius: 100px;
          }
        }
      }

      .name-source-wrapper {
        display: flex;
        flex-direction: column;
        text-align: left;

        .project-name {
          display: flex;
          align-items: center;
          font-weight: 500;

          @media (max-width: ${breakpointsDefinition.smallMobile}) {
            flex-direction: column;
            align-items: start;
            margin-bottom: 5px;
          }
        }
      }
    }

    .balance-information {
      .vault-balance-wrapper {
        display: flex;
        text-align: left;
        white-space: nowrap;

        .balance-value {
          color: var(--white);
          font-weight: 500;
        }
      }

      .sub-label {
        font-size: var(--tiny);
        color: var(--gray);
      }
    }
  `
);

export const StyledVersionFlag = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  text-transform: uppercase;
  background-color: var(--turquoise);
  color: var(--strong-blue);
  padding: 10px 6px;
  border-radius: 0 0 18px 0;
  font-size: var(--xsmall);

  @media (max-width: ${breakpointsDefinition.mobile}) {
    margin-left: unset;
  }
`;

export const StyledVaultExpandAction = styled.div<{ expanded: boolean }>(
  ({ expanded }) => css`
    display: flex;
    justify-content: start;
    cursor: pointer;
    transform: rotate(0deg);
    transition: transform 0.1s linear;
    margin-left: 30px;
    width: 10px;
    height: 10px;

    &:hover {
      opacity: 0.8;
    }

    ${expanded &&
    css`
      transform: rotate(90deg);
      transition: transform 0.1s linear;
    `}
  `
);
