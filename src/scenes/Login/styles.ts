import styled from 'styled-components';

import { getTheme, pxToRem } from '~/utils';

// Breakpoint
const inMobile = getTheme('inMobile');
const inTablet = getTheme('inTablet');

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #e4e4f0;
`;

export const Content = styled.div`
  display: flex;

  flex-direction: column;

  background-color: #fff;
  border: 1px solid #e4e4f0;
  border-radius: ${pxToRem(4)};

  width: ${pxToRem(420)};
  padding: 40px 30px;
  margin: auto;

  @media ${inMobile} {
    display: none;
  }

  @media ${inTablet} {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: ${pxToRem(28)};

  color: #1e90ff;
`;

export const Description = styled.h2`
  font-size: ${pxToRem(16)};
  font-weight: 400;

  color: #3b3d4d;

  margin-top: ${pxToRem(12)};

  margin-bottom: ${pxToRem(16)};
`;

export const Line = styled.div`
  display: flex;

  flex-direction: column;

  &.last-child {
    margin-top: ${pxToRem(20)};
  }
`;

export const Text = styled.span`
  font-size: ${pxToRem(14)};

  font-weight: bold;
  color: #3b3d4d;
`;

export const Input = styled.input`
  width: 100%;
  height: ${pxToRem(42)};

  padding: 0 ${pxToRem(8)};
  border-radius: ${pxToRem(4)};
  border: 1px solid #e4e4f0;
  background-color: #f9f9f9;

  margin-top: ${pxToRem(6)};

  font-size: ${pxToRem(16)};
  color: #000;
`;

export const Button = styled.button`
  width: 100%;
  height: ${pxToRem(42)};

  margin-top: ${pxToRem(40)};
  border-radius: ${pxToRem(4)};
  border: 1px solid #e4e4f0;
  background-color: #1e90ff;

  cursor: pointer;

  &:hover {
    background-color: #836fff;
  }

  a {
    text-decoration: none;

    font-size: ${pxToRem(16)};
    color: #fff;
  }
`;

export const WrapperLogo = styled.div`
  background-color: #fff;

  width: 50%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  margin: auto;

  width: ${pxToRem(300)};
`;
