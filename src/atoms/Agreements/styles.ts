import styled from 'styled-components';

import { getTheme, pxToRem } from '~/utils';

type PropsItem = {
  message?: boolean;
};

const primaryBorder = getTheme('primary.border');
const primaryDark = getTheme('primary.dark');
const tertiaryMain = getTheme('tertiary.main');

const inMobile = getTheme('inMobile');

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
  padding: ${pxToRem(12)} ${pxToRem(18)};

  border: 1px solid ${primaryBorder};
  border-radius: ${pxToRem(4)};

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media ${inMobile} {
    width: 100%;
  }
`;

export const TextItem = styled.div<PropsItem>`
  color: ${primaryDark};

  width: ${props => (props.message ? '100%' : '49%')};

  span.label {
    font-weight: bold;
    color: ${tertiaryMain};
  }

  @media ${inMobile} {
    width: 100%;
    margin-bottom: ${pxToRem(4)};
  }
`;
