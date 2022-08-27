import React from 'react';

import { Agreements, Debtors, Debts, Navigation, Search } from '~/atoms';
import { Header, If, Loading } from '~/components';
import { OPTION_MENU } from '~/utils';

import { Container, Content, ContentDebts, Title } from './styles';

type Props = {
  username?: string;
  stateMenu: string;
  dataDebtors: DebtorsType.List[];
  dataDebts: DebtsType.List[];
  dataAgreements: AgreementsType.List[];
  loading: boolean;
  countTotal: number;
  search: string;

  setStateMenu: (value: string) => void;
  handleLogout: () => void;
  handleSearch: () => void;
  setSearch: (values: string) => void;
  clearSearch: () => void;
};

const Home: React.FC<Props> = ({
  username = '',
  stateMenu,
  setStateMenu,
  dataDebts,
  dataAgreements,
  dataDebtors,
  loading,
  handleLogout,
  countTotal,
  search,
  handleSearch,
  setSearch,
  clearSearch,
}) => {
  return (
    <Container>
      <Header username={username} handleLogout={handleLogout} />

      <If condition={loading}>
        <Loading />
      </If>

      <Content>
        <ContentDebts>
          <div className="header">
            <Title>{stateMenu}</Title>
            <span className="info">Total de {countTotal} resultados</span>
          </div>

          <If condition={stateMenu === OPTION_MENU.DEBTORS}>
            <Search
              OnChange={setSearch}
              OnClick={handleSearch}
              clearSearch={clearSearch}
              value={search}
            />

            <Debtors dataDebtors={dataDebtors} />
          </If>

          <If condition={stateMenu === OPTION_MENU.DEBTS}>
            <Debts dataDebts={dataDebts} />
          </If>

          <If condition={stateMenu === OPTION_MENU.AGREEMENTS}>
            <Agreements dataAgreements={dataAgreements} />
          </If>
        </ContentDebts>

        <Navigation setStateMenu={setStateMenu} stateMenu={stateMenu} />
      </Content>
    </Container>
  );
};

export default Home;
