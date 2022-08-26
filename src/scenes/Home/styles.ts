import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { Avatar, MinLogo, Search } from '~/assets';
import { pxToRem } from '~/utils';

// Breakpoint
// const inMobile = getTheme('inMobile');
// const inTablet = getTheme('inTablet');

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;

  display: flex;
  flex-direction: column;

  background: #f9f9f9;
`;

export const Content = styled.div`
  display: flex;

  margin: 0 ${pxToRem(140)};
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

export const ContentDebts = styled.div`
  background-color: #fff;
  border: 1px solid #e4e4f0;
  border-radius: ${pxToRem(4)};

  display: flex;
  flex-direction: column;
  flex: 1;

  margin: ${pxToRem(24)};
  margin-left: 0;

  div.header {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: flex-end;

    padding: ${pxToRem(20)};
  }

  div.header > span.info {
    color: #696969;
  }
`;

export const Title = styled.h1`
  font-size: ${pxToRem(24)};
`;

export const WrapperSearch = styled.div`
  width: 95%;
  height: ${pxToRem(60)};

  margin: 0 auto;

  display: flex;

  border: 1px solid #e4e4f0;
  border-radius: ${pxToRem(4)};
`;

export const Input = styled.input`
  font-size: ${pxToRem(16)};
  width: 100%;

  padding: 0 ${pxToRem(16)};
  border: none;
  border-right: 1px solid #e4e4f0;
  border-bottom-left-radius: ${pxToRem(4)};
  border-top-left-radius: ${pxToRem(4)};
`;

export const WrapperSearchIcon = styled.div`
  width: ${pxToRem(70)};
  border-bottom-right-radius: ${pxToRem(4)};
  border-top-right-radius: ${pxToRem(4)};

  cursor: pointer;
  background-color: #1e90ff;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #836fff;
  }
`;
export const SearchIcon = styled(Search)``;
