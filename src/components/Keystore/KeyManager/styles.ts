import styled from "styled-components";

export const StyledKeyManager = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: var(--spacing-3);

    .box-with-copy {
      width: 60%;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-right: 5px;
      padding: 12px 12px 12px 16px;
      border: 1px solid var(--turquoise);

      .selected-key {
        flex: 1;
        display: flex;
        align-items: center;

        span {
          margin-left: 0.5em;
        }

        &__fish-eye {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          position: relative;
          background-color: var(--turquoise);
          margin: 3px;

          &:after {
            content: "";
            border: 1px solid var(--turquoise);
            border-radius: 50%;
            width: 23px;
            height: 23px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }

      img {
        cursor: pointer;
      }
    }

    .open-key-list {
      width: 30%;
      margin: unset;
      margin-bottom: 0 !important;
    }
`;