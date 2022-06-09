import { baseTheme } from './theme';
import { css } from "styled-components";

export const buttonStyles = css`
  .btn {
    height: ${baseTheme.buttonSize.medium.height};
    line-height: ${baseTheme.buttonSize.medium.lineHeight};
    padding: .5rem ${baseTheme.buttonSize.medium.padding};
    font-size: ${baseTheme.buttonSize.medium.fontSize};
    font-weight: ${baseTheme.buttonSize.medium.fontWeight};
    border: 0;
    outline: none;
    border-radius: .25rem;
    color: ${baseTheme.buttonColor.primary.textColor};
    background: ${baseTheme.buttonColor.primary.color};
    text-decoration: none;
    transition: all .3s;
    cursor: pointer;
    display: inline-block;
    user-select: none;
    
    &:hover {
      background: ${baseTheme.buttonColor.primary.hoverColor};
    }
    
    &:disabled {
      cursor: not-allowed;
      opacity: 30%;
    }

    // Button purpose
    &-primary {
      color: ${baseTheme.buttonColor.primary.textColor};
      background: ${baseTheme.buttonColor.primary.color};

      &:hover {
        background: ${baseTheme.buttonColor.primary.hoverColor};
      }
    }

    &-negative {
      color: ${baseTheme.buttonColor.negative.textColor};
      background: ${baseTheme.buttonColor.negative.color};

      &:hover {
        background: ${baseTheme.buttonColor.negative.hoverColor};
      }
    }
  }
`;
