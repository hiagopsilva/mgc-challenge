import styled from 'styled-components';

import { Button, TextInput } from '~/components';
import { getTheme, pxToRem } from '~/utils';

const primaryBorder = getTheme('primary.border');
const primaryLight = getTheme('primary.light');
const primaryMain = getTheme('primary.main');
const primaryDark = getTheme('primary.dark');

// Breakpoint
const inMobile = getTheme('inMobile');

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${primaryBorder};

  @media ${inMobile} {
    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;

  flex-direction: column;

  background-color: ${primaryLight};
  border: 1px solid ${primaryBorder};
  border-radius: ${pxToRem(4)};

  width: ${pxToRem(420)};
  padding: ${pxToRem(40)} ${pxToRem(30)};
  margin: auto;

  @media ${inMobile} {
    margin: auto ${pxToRem(12)};

    padding: ${pxToRem(24)} ${pxToRem(12)};
    width: ${pxToRem(520)};
  }
`;

export const Title = styled.h1`
  font-size: ${pxToRem(28)};

  color: ${primaryMain};

  @media ${inMobile} {
    font-size: ${pxToRem(24)};
  }
`;

export const Description = styled.h2`
  font-size: ${pxToRem(16)};
  font-weight: 400;

  color: ${primaryDark};

  margin-top: ${pxToRem(12)};

  margin-bottom: ${pxToRem(16)};

  @media ${inMobile} {
    font-size: ${pxToRem(14)};
  }
`;

export const WrapperLogo = styled.div`
  background-color: ${primaryLight};

  width: 50%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${inMobile} {
    display: none;
  }
`;

export const Image = styled.img`
  margin: auto;

  width: ${pxToRem(300)};
`;

export const TextInputStyled = styled(TextInput)`
  & + & {
    margin-top: ${pxToRem(20)};
  }
`;

export const ButtonStyled = styled(Button)``;
