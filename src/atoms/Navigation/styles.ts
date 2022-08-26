import styled from 'styled-components';

import { getTheme, pxToRem } from '~/utils';

const primaryBorder = getTheme('primary.border');
const primaryLight = getTheme('primary.light');
const primaryMain = getTheme('primary.main');

export const Wrapper = styled.div`
  width: ${pxToRem(200)};
  height: ${pxToRem(140)};

  background-color: ${primaryLight};
  border: 1px solid ${primaryBorder};
  border-radius: ${pxToRem(4)};

  margin-left: auto;
  margin-top: ${pxToRem(24)};

  padding: ${pxToRem(16)};
`;

export const ContentOption = styled.div`
  height: 100%;

  display: flex;

  justify-content: space-between;
  flex: 1;

  flex-direction: column;
`;

export const Option = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: row;

  align-items: center;

  div {
    width: ${pxToRem(7)};
    height: ${pxToRem(7)};

    background-color: transparent;
    border-radius: 50%;
  }

  div.active {
    background-color: ${primaryMain};
  }

  span {
    margin-left: ${pxToRem(8)};
  }

  span.active {
    color: ${primaryMain};
  }
`;
