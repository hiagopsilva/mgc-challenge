import { FC } from 'react';

import {
  Wrapper,
  ContentLeft,
  Image,
  ContentRight,
  TitleAvatar,
  Logout,
  WrapperAvatar,
  AvatarSVG,
} from './styles';

type Props = {
  username: string;
  handleLogout: () => void;
};

const Header: FC<Props> = ({ username, handleLogout }) => {
  return (
    <Wrapper>
      <ContentLeft>
        <Image />
      </ContentLeft>

      <ContentRight>
        <div className="content-avatar">
          <TitleAvatar>Olá, {username}</TitleAvatar>
          <Logout onClick={handleLogout}>Sair</Logout>
        </div>

        <WrapperAvatar>
          <AvatarSVG />
        </WrapperAvatar>
      </ContentRight>
    </Wrapper>
  );
};

export default Header;
