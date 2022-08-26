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
  WrapperList,
  Item,
  TextItem,
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

          <WrapperList>
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4,
              5, 6, 7, 8, 9,
            ].map(item => (
              <Item>
                <TextItem>123.456.789-10</TextItem>
                <TextItem>VITOR LUIZ ANTUNES</TextItem>
                <TextItem>05/03/1998</TextItem>
              </Item>
            ))}
          </WrapperList>
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
