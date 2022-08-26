import styled from 'styled-components';

import { getTheme, pxToRem } from '~/utils';

const primaryBorder = getTheme('primary.border');
const primaryDark = getTheme('primary.dark');
const tertiaryMain = getTheme('tertiary.main');

export const Wrapper = styled.div`
  width: 95%;

  margin: ${pxToRem(20)} auto ${pxToRem(20)};

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Item = styled.div`
  width: 49%;
  min-height: ${pxToRem(50)};
  margin-bottom: ${pxToRem(12)};
  padding: ${pxToRem(12)} ${pxToRem(12)};

  border: 1px solid ${primaryBorder};
  border-radius: ${pxToRem(4)};

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const TextItem = styled.span`
  color: ${primaryDark};

  width: 49%;

  margin-bottom: 4px;

  span.label {
    font-weight: bold;
    color: ${tertiaryMain};
  }
`;
