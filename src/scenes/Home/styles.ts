import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { Avatar, MinLogo } from '~/assets';
import { getTheme, pxToRem } from '~/utils';

// Breakpoint
const inMobile = getTheme('inMobile');
const inTablet = getTheme('inTablet');

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #f9f9f9;
`;

export const Content = styled.div`
  display: flex;

  margin: 0 ${pxToRem(140)};

  flex: 1;
`;

export const Image = styled.img.attrs({
  src: `${MinLogo}`,
})`
  width: ${pxToRem(80)};
`;

export const Header = styled.div`
  background-color: #fff;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  height: ${pxToRem(70)};
  width: 100%;

  border-bottom: 1px solid #e4e4f0;
  padding: 0 ${pxToRem(140)};
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TitleAvatar = styled.div``;

export const ContentRight = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  div.content-avatar {
    display: flex;
    flex-direction: column;

    align-items: flex-end;
  }
`;

export const AvatarSVG = styled(Avatar)``;

export const WrapperAvatar = styled.div`
  background-color: #e4e4f0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${pxToRem(50)};
  height: ${pxToRem(50)};

  border-radius: 50%;

  margin-left: ${pxToRem(8)};

  cursor: pointer;
`;

export const Logout = styled(Link)`
  font-size: ${pxToRem(12)};

  cursor: pointer;
`;

export const WrapperNavigation = styled.div`
  width: ${pxToRem(200)};
  height: ${pxToRem(140)};

  background-color: #fff;
  border: 1px solid #e4e4f0;
  border-radius: ${pxToRem(4)};

  margin-left: auto;
  margin-top: ${pxToRem(24)};

  padding: ${pxToRem(16)};
`;

export const ContentOption = styled.div`
  height: 100%;

  display: flex;

  justify-content: space-between;
  flex: 1;

  flex-direction: column;
`;

export const Option = styled.div`
  cursor: pointer;
`;
