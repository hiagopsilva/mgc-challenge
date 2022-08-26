import styled from 'styled-components';

import { getTheme, pxToRem } from '~/utils';

const secondaryLight = getTheme('secondary.light');
const primaryLight = getTheme('primary.light');
const primaryBorder = getTheme('primary.border');
const secondaryMain = getTheme('secondary.main');

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
  }

  div.header > span.info {
    color: ${secondaryMain};
  }
`;

export const Title = styled.h1`
  font-size: ${pxToRem(24)};
`;
