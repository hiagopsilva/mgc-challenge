import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '~/contexts/auth';
import { Routing } from '~/routes';
import { request, Storage } from '~/services';
import store from '~/store';
import { OPTION_MENU } from '~/utils';

import Home from './Home';

type Props = {};

const HomeContainer: React.FC<Props> = () => {
  const history = useHistory();

  store.dispatch({ type: 'getName' });

  const { user2 } = store.getState();

  const [stateMenu, setStateMenu] = useState<string>(OPTION_MENU.DEBTORS);
  const [dataDebtors, setDataDebtors] = useState([]);
  const [dataDebts, setDataDebts] = useState([]);
  const [dataAgreements, setAgreements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countTotal, setCountTotal] = useState(0);

  const { name } = useContext(AuthContext);

  const handleLoading = (stateLoading: boolean) => setLoading(stateLoading);

  const fetchDataDebtors = async () => {
    const { data } = await request.get('/debtors/list');

    setDataDebtors(data);
    handleLoading(false);
    setCountTotal(data.length);
  };

  const fetchDataDebts = async () => {
    const { data } = await request.get('/debts/list');

    setDataDebts(data);
    handleLoading(false);
    setCountTotal(data.length);
  };

  const fetchDataAgreements = async () => {
    const { data } = await request.get('/agreements/list');

    setAgreements(data);
    handleLoading(false);
    setCountTotal(data.length);
  };

  const handleLogout = async () => {
    Storage.clearToken();
    history.push(Routing.LOGIN);
  };

  useEffect(() => {
    fetchDataDebtors();
  }, []);

  useEffect(() => {
    handleLoading(true);

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
      loading={loading}
      handleLogout={handleLogout}
      countTotal={countTotal}
    />
  );
};

export default HomeContainer;
