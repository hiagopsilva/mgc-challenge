import styled from 'styled-components';

import { getTheme, pxToRem } from '~/utils';

const primaryBorder = getTheme('primary.border');
const primaryDark = getTheme('primary.dark');
const secondaryMain = getTheme('secondary.main');
const tertiaryMain = getTheme('tertiary.main');

export const Wrapper = styled.div`
  width: 95%;

  margin: ${pxToRem(20)} auto ${pxToRem(20)};

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  width: 49%;
  min-height: ${pxToRem(50)};
  margin-bottom: ${pxToRem(12)};
  padding: 12px ${pxToRem(18)};

  border: 1px solid ${primaryBorder};
  border-radius: ${pxToRem(4)};

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const TextItem = styled.div`
  color: ${primaryDark};

  width: 49%;

  margin-bottom: ${pxToRem(8)};
  font-weight: bold;

  span.label {
    font-weight: bold;
    color: ${tertiaryMain};
  }
`;

export const TextItemMessage = styled.div`
  color: ${primaryDark};

  width: 100%;

  margin-bottom: ${pxToRem(8)};
  font-weight: bold;

  span.label {
    font-weight: bold;
    color: ${tertiaryMain};
  }
`;
