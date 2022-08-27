import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { isEmpty } from 'lodash';

import { AuthContext } from '~/contexts/auth';
import { Routing } from '~/routes';
import { request, Storage } from '~/services';
import { alert, OPTION_MENU } from '~/utils';

import Home from './Home';

type Props = {};

const HomeContainer: React.FC<Props> = () => {
  const history = useHistory();

  const [stateMenu, setStateMenu] = useState<string>(OPTION_MENU.DEBTORS);
  const [dataDebtors, setDataDebtors] = useState<DebtorsType.List[]>([]);
  const [dataDebts, setDataDebts] = useState<DebtsType.List[]>([]);
  const [dataAgreements, setAgreements] = useState<AgreementsType.List[]>([]);
  const [loading, setLoading] = useState(true);
  const [countTotal, setCountTotal] = useState(0);
  const [search, setSearch] = useState('');

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

  const handleSearch = async () => {
    const { data } = await request.post('/debtors/search', { value: search });

    if (isEmpty({ data })) {
      return alert({ message: 'Nenhum resultado encontrado!', type: 'error' });
    }

    setDataDebtors([data]);
    handleLoading(false);
    setCountTotal(data.length);
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
      search={search}
      setSearch={setSearch}
      handleSearch={handleSearch}
    />
  );
};

export default HomeContainer;
