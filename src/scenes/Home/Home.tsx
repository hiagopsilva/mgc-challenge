import React from 'react';

import {
  Container,
  Image,
  Content,
  Header,
  ContentLeft,
  ContentRight,
  TitleAvatar,
  AvatarSVG,
  WrapperAvatar,
  Logout,
  WrapperNavigation,
  ContentOption,
  Option,
} from './styles';

type Props = {
  username?: string;
};

const Home: React.FC<Props> = ({ username = '' }) => {
  return (
    <Container>
      <Header>
        <ContentLeft>
          <Image />
        </ContentLeft>

        <ContentRight>
          <div className="content-avatar">
            <TitleAvatar>Olá, {username}</TitleAvatar>
            <Logout to="/">Sair</Logout>
          </div>

          <WrapperAvatar>
            <AvatarSVG />
          </WrapperAvatar>
        </ContentRight>
      </Header>

      <Content>
        <WrapperNavigation>
          <ContentOption>
            <Option>Item 1</Option>
            <Option>Item 2</Option>
            <Option>Item 3</Option>
          </ContentOption>
        </WrapperNavigation>
      </Content>
    </Container>
  );
};

export default Home;
