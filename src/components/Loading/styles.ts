import styled from 'styled-components';

import { ReactLoading, getTheme, pxToRem } from '~/utils';

const primaryLight = getTheme('primary.light');
const secondaryDark = getTheme('secondary.dark');

export const WrapperLoading = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  background-color: ${secondaryDark};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled(ReactLoading).attrs(props => ({
  color: primaryLight(props),
}))`
  width: 100%;
`;

export const Title = styled.span`
  margin-top: ${pxToRem(20)};
  font-size: ${pxToRem(28)};
  font-weight: bold;

  color: ${primaryLight};
`;
