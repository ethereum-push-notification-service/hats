import { getSpacing } from "styles";
import styled, { css } from "styled-components";

type StyledFormIconInputProps = {
  isDirty: boolean;
};

export const StyledFormIconInput = styled.div<StyledFormIconInputProps>(
  ({ isDirty }) => css`
    label {
      display: block;
      color: var(--white);
      padding-bottom: ${getSpacing(1)};
    }

    .file-input {
      position: absolute;
      opacity: 0;
      flex: 0 1;
      width: 0;
      height: 0;
      padding: 0;
      margin: 0;
    }

    .icon-add,
    .icon-preview {
      cursor: pointer;
      width: ${getSpacing(15)};
      height: ${getSpacing(15)};
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      border: 1px solid var(--turquoise);
      color: var(--dark-turquoise);
      padding: 0;

      ${isDirty &&
      css`
        border: 1px solid var(--yellow);
      `}
    }

    .icon-add {
      img {
        width: ${getSpacing(3.5)};
        height: ${getSpacing(3.5)};
      }
    }

    .icon-preview {
      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
  `
);
