import styled from 'styled-components';

import { getTheme, pxToRem } from '~/utils';

const primaryBorder = getTheme('primary.border');
const primaryDark = getTheme('primary.dark');

export const Wrapper = styled.div`
  width: 95%;

  margin: ${pxToRem(20)} auto ${pxToRem(20)};

  flex: 1;
`;

export const Item = styled.div`
  width: 100%;
  height: ${pxToRem(50)};
  margin-bottom: ${pxToRem(12)};
  padding: 0 ${pxToRem(24)};

  border: 1px solid ${primaryBorder};
  border-radius: ${pxToRem(4)};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextItem = styled.span`
  color: ${primaryDark};
`;
