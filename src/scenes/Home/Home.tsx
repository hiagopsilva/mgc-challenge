import React from 'react';

import { Agreements, Debtors, Debts, Navigation, Search } from '~/atoms';
import { Header, If } from '~/components';

import { Container, Content, ContentDebts, Title } from './styles';

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

          <Search />

          <If condition={stateMenu === 'Debtors'}>
            <Debtors dataDebtors={dataDebtors} />
          </If>

          <If condition={stateMenu === 'Debts'}>
            <Debts dataDebts={dataDebts} />
          </If>

          <If condition={stateMenu === 'Agreements'}>
            <Agreements dataAgreements={dataAgreements} />
          </If>
        </ContentDebts>

        <Navigation setStateMenu={setStateMenu} stateMenu={stateMenu} />
      </Content>
    </Container>
  );
};

export default Home;
