import styled from 'styled-components';

import { getTheme, pxToRem } from '~/utils';

const primaryLight = getTheme('primary.light');
const primaryBorder = getTheme('primary.border');
const primaryMain = getTheme('primary.main');
const primaryContrast = getTheme('primary.contrast');

export const Wrapper = styled.button`
  width: 100%;
  height: ${pxToRem(42)};

  margin-top: ${pxToRem(40)};
  border-radius: ${pxToRem(4)};
  border: 1px solid ${primaryBorder};
  background-color: ${primaryMain};

  cursor: pointer;

  &:hover {
    background-color: ${primaryContrast};
  }

  span {
    font-size: ${pxToRem(16)};
    font-weight: bold;
    color: ${primaryLight};
  }
`;
