import { css } from 'styled-components'
import { baseTheme } from "./theme";

export const mainWideWrapper = css`
  max-width: ${baseTheme.sizes.maxWidth}px;
  width: 100%;
  margin: 0 auto;
`;

export const mainContentWrapper = css`
  max-width: ${baseTheme.sizes.maxContentWidth}px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
`;
