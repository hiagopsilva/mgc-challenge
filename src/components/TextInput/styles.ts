import styled from 'styled-components';

import { getTheme, pxToRem } from '~/utils';

type PropsInput = {
  error?: boolean;
};

const primaryLight = getTheme('primary.light');
const primaryDark = getTheme('primary.dark');
const secondaryLight = getTheme('secondary.light');
const failure = getTheme('failure');
const secondaryContrast = getTheme('secondary.contrast');

export const Wrapper = styled.div`
  display: flex;

  flex-direction: column;

  &.last-child {
    margin-top: ${pxToRem(20)};
  }
`;

export const Text = styled.span`
  font-size: ${pxToRem(14)};

  font-weight: bold;
  color: ${primaryDark};
`;

export const Input = styled.input<PropsInput>`
  width: 100%;
  height: ${pxToRem(42)};

  padding: 0 ${pxToRem(8)};
  border-radius: ${pxToRem(4)};
  border: 1px solid
    ${props => (props.error ? failure(props) : primaryLight(props))};
  background-color: ${secondaryLight};

  margin-top: ${pxToRem(6)};

  font-size: ${pxToRem(16)};
  color: ${secondaryContrast};
`;
