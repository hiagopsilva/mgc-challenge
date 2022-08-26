import React from 'react';

import { Debts } from '~/atoms';
import { Header, If } from '~/components';
import { formatCPF, formatDate, currencyFormat } from '~/utils';

import {
  Container,
  Content,
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
  dataDebtors: any;
  dataDebts: any;
  dataAgreements: any;
};

const Home: React.FC<Props> = ({
  username = '',
  stateMenu,
  setStateMenu,
  dataDebts,
  dataAgreements,
  dataDebtors,
}) => {
  return (
    <Container>
      <Header username={username} />

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

          <If condition={stateMenu === 'Debtors'}>
            <Debts dataDebtors={dataDebtors} />
          </If>

          <If condition={stateMenu === 'Debts'}>
            <WrapperList>
              {dataDebts.map((item: any) => (
                <Item key={item.id}>
                  <TextItem>{item.carteira}</TextItem>
                  <TextItem>{formatDate(item.data)}</TextItem>
                  <TextItem>{currencyFormat(item.valor)}</TextItem>
                  <TextItem>
                    ATIVO:
                    {`${item.ativo}` ? ' SIM' : ' NÃO'}
                  </TextItem>
                  <TextItem>{item.bucket}</TextItem>
                </Item>
              ))}
            </WrapperList>
          </If>

          <If condition={stateMenu === 'Agreements'}>
            <WrapperList>
              {dataAgreements.map((item: any) => (
                <Item key={item.id}>
                  <TextItem>{currencyFormat(item.valor)}</TextItem>
                  <TextItem>{item.parcelas}</TextItem>
                  <TextItem>{item.vencimento}</TextItem>
                  <TextItem>{item.msg}</TextItem>
                  <TextItem>
                    ATIVO:
                    {`${item.ativo}` ? ' SIM' : ' NÃO'}
                  </TextItem>
                  <TextItem>
                    ACEITO:
                    {`${item.aceito}` ? ' SIM' : ' NÃO'}
                  </TextItem>
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
