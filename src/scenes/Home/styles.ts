import styled from 'styled-components';

import { getTheme, pxToRem } from '~/utils';

const secondaryLight = getTheme('secondary.light');
const primaryLight = getTheme('primary.light');
const primaryBorder = getTheme('primary.border');
const secondaryMain = getTheme('secondary.main');

const inMobile = getTheme('inMobile');

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;

  display: flex;
  flex-direction: column;

  background: ${secondaryLight};
`;

export const Content = styled.div`
  display: flex;

  margin: 0 ${pxToRem(140)};

  @media ${inMobile} {
    margin: 0 ${pxToRem(20)};

    flex-direction: column-reverse;
  }
`;

export const ContentDebts = styled.div`
  background-color: ${primaryLight};
  border: 1px solid ${primaryBorder};
  border-radius: ${pxToRem(4)};

  display: flex;
  flex-direction: column;
  flex: 1;

  margin: ${pxToRem(24)};
  margin-left: 0;

  div.header {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: flex-end;

    padding: ${pxToRem(20)};

    @media ${inMobile} {
      align-items: center;
      padding: ${pxToRem(20)} ${pxToRem(10)};
    }
  }

  div.header > span.info {
    color: ${secondaryMain};
  }

  @media ${inMobile} {
    margin-right: 0;
    margin-top: ${pxToRem(12)};
  }
`;

export const Title = styled.h1`
  font-size: ${pxToRem(24)};
`;
