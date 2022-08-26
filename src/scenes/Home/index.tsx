import React, { useContext, useEffect, useState } from 'react';

import { BrowserHistory } from 'history';

import { AuthContext } from '~/contexts/auth';
// import { Routing } from '~/routes';
import { request } from '~/services';
import { OPTION_MENU } from '~/utils';

import Home from './Home';

type Props = {
  history: BrowserHistory;
};

const HomeContainer: React.FC<Props> = () => {
  const [stateMenu, setStateMenu] = useState(OPTION_MENU.DEBTORS);
  const [dataDebtors, setDataDebtors] = useState([]);
  const [dataDebts, setDataDebts] = useState([]);
  const [dataAgreements, setAgreements] = useState([]);

  const { name } = useContext(AuthContext);
  // setTimeout(() => {
  //   Storage.clearToken();
  //   history.push(Routing.LOGIN);
  // }, 5000);

  const fetchDataDebtors = async () => {
    const { data } = await request.get('/debtors/list');

    setDataDebtors(data);
  };

  const fetchDataDebts = async () => {
    const { data } = await request.get('/debts/list');

    setDataDebts(data);
  };

  const fetchDataAgreements = async () => {
    const { data } = await request.get('/agreements/list');

    setAgreements(data);
  };

  useEffect(() => {
    fetchDataDebtors();
  }, []);

  useEffect(() => {
    stateMenu === OPTION_MENU.DEBTORS && fetchDataDebtors();
    stateMenu === OPTION_MENU.DEBTS && fetchDataDebts();
    stateMenu === OPTION_MENU.AGREEMENTS && fetchDataAgreements();
  }, [stateMenu]);

  return (
    <Home
      username={name}
      stateMenu={stateMenu}
      setStateMenu={setStateMenu}
      dataDebts={dataDebts}
      dataDebtors={dataDebtors}
      dataAgreements={dataAgreements}
    />
  );
};

export default HomeContainer;
