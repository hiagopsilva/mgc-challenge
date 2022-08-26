/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';

import { isEmpty } from 'lodash';

import { If } from '~/components';
import { formatCPF, formatDate } from '~/utils';

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
  stateMenu: string;
  setStateMenu: (value: any) => void;
  dataDebts: any;
};

const Home: React.FC<Props> = ({
  username = '',
  stateMenu,
  setStateMenu,
  dataDebts,
}) => {
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
            <Title>{stateMenu}</Title>
            <span className="info">Total de 12 resultados</span>
          </div>

          <WrapperSearch>
            <Input placeholder="Pesquisar..." />
            <WrapperSearchIcon>
              <SearchIcon />
            </WrapperSearchIcon>
          </WrapperSearch>

          <If condition={!isEmpty(dataDebts)}>
            <WrapperList>
              {dataDebts.map((item: any) => (
                <Item key={item.id}>
                  <TextItem>{formatCPF(item.cpf)}</TextItem>
                  <TextItem>{item.nome}</TextItem>
                  <TextItem>{formatDate(item.dataNascimento)}</TextItem>
                </Item>
              ))}
            </WrapperList>
          </If>
        </ContentDebts>

        <WrapperNavigation>
          <ContentOption>
            <Option onClick={() => setStateMenu('Debtors')}>
              <div className={stateMenu === 'Debtors' ? 'active' : ''} />
              <span className={stateMenu === 'Debtors' ? 'active' : ''}>
                Debtors
              </span>
            </Option>

            <Option onClick={() => setStateMenu('Debts')}>
              <div className={stateMenu === 'Debts' ? 'active' : ''} />
              <span className={stateMenu === 'Debts' ? 'active' : ''}>
                Debts
              </span>
            </Option>

            <Option onClick={() => setStateMenu('Agreements')}>
              <div className={stateMenu === 'Agreements' ? 'active' : ''} />
              <span className={stateMenu === 'Agreements' ? 'active' : ''}>
                Agreements
              </span>
            </Option>
          </ContentOption>
        </WrapperNavigation>
      </Content>
    </Container>
  );
};

export default Home;
