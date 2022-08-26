import styled from 'styled-components';

import { getTheme, pxToRem } from '~/utils';

const primaryBorder = getTheme('primary.border');
const primaryLight = getTheme('primary.light');
const primaryMain = getTheme('primary.main');

const inMobile = getTheme('inMobile');

export const Wrapper = styled.div`
  width: ${pxToRem(200)};
  height: ${pxToRem(140)};

  background-color: ${primaryLight};
  border: 1px solid ${primaryBorder};
  border-radius: ${pxToRem(4)};

  margin-left: auto;
  margin-top: ${pxToRem(24)};

  padding: ${pxToRem(16)};

  @media ${inMobile} {
    width: 100%;
    height: ${pxToRem(70)};

    margin-top: ${pxToRem(12)};
  }
`;

export const ContentOption = styled.div`
  height: 100%;

  display: flex;

  justify-content: space-between;
  flex: 1;

  flex-direction: column;

  @media ${inMobile} {
    flex-direction: row;
    justify-content: space-around;
  }
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

    @media ${inMobile} {
      display: none;
    }
  }

  div.active {
    background-color: ${primaryMain};
  }

  span {
    margin-left: ${pxToRem(8)};

    @media ${inMobile} {
      margin-left: 0;
    }
  }

  span.active {
    color: ${primaryMain};

    @media ${inMobile} {
      border-bottom: 1px solid ${primaryMain};
    }
  }
`;
