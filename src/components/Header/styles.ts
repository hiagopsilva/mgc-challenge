import styled from 'styled-components';

import { Avatar, MinLogo } from '~/assets';
import { getTheme, pxToRem } from '~/utils';

const primaryBorder = getTheme('primary.border');
const primaryLight = getTheme('primary.light');

const inMobile = getTheme('inMobile');

export const Wrapper = styled.div`
  background-color: ${primaryLight};

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  height: ${pxToRem(70)};
  width: 100%;

  border-bottom: 1px solid ${primaryBorder};
  padding: 0 ${pxToRem(140)};

  @media ${inMobile} {
    padding: 0 ${pxToRem(20)};
    height: ${pxToRem(90)};
  }
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TitleAvatar = styled.span``;

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
  background-color: ${primaryBorder};

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${pxToRem(50)};
  height: ${pxToRem(50)};

  border-radius: 50%;

  margin-left: ${pxToRem(8)};

  cursor: pointer;
`;

export const Logout = styled.div`
  font-size: ${pxToRem(12)};

  cursor: pointer;
`;

export const Image = styled.img.attrs({
  src: `${MinLogo}`,
})`
  width: ${pxToRem(80)};
`;
