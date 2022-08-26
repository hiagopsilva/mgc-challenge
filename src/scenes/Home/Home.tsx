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
  ContentDebts,
  Title,
  WrapperSearch,
  Input,
  SearchIcon,
  WrapperSearchIcon,
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
        <ContentDebts>
          <div className="header">
            <Title>Debts</Title>
            <span className="info">Total de 12 resultados</span>
          </div>

          <WrapperSearch>
            <Input placeholder="Pesquisar..." />
            <WrapperSearchIcon>
              <SearchIcon />
            </WrapperSearchIcon>
          </WrapperSearch>
        </ContentDebts>

        <WrapperNavigation>
          <ContentOption>
            <Option>Debtors</Option>
            <Option>Debts</Option>
            <Option>Agreements</Option>
          </ContentOption>
        </WrapperNavigation>
      </Content>
    </Container>
  );
};

export default Home;
