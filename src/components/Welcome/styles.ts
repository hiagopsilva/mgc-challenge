import styled from 'styled-components';

import { getTheme } from '~/utils';

// Breakpoint
const inMobile = getTheme('inMobile');
const inTablet = getTheme('inTablet');

export const Wrapper = styled.div`
  display: flex;

  div {
    margin: 0 auto;
    width: 80%;

    flex-direction: column;
  }
`;

export const Title = styled.h1`
  margin-top: 180px;

  color: #2d1d4e;

  font-weight: bold;
  font-size: 56px;

  @media ${inMobile} {
    font-size: 50px;
  }

  @media ${inTablet} {
    font-size: 50px;
  }
`;

export const Description = styled.h4`
  margin-top: 32px;

  color: #837e7e;

  font-weight: 400;
  font-size: 24px;
`;

export const Info = styled.h5`
  margin-top: 40px;

  color: #837e7e;

  font-weight: 500;
  font-size: 20px;

  span {
    color: #2d1d4e;

    font-weight: 700;
    font-size: 20px;
  }
`;
