import React, { useContext, useEffect, useState } from 'react';

import { BrowserHistory } from 'history';

import { AuthContext } from '~/contexts/auth';
import { Routing } from '~/routes';
import { request, Storage } from '~/services';

import Home from './Home';

type Props = {
  history: BrowserHistory;
};

const HomeContainer: React.FC<Props> = () => {
  const [stateMenu, setStateMenu] = useState('Debtors');
  const [dataDebts, setDataDebts] = useState([]);

  const { name } = useContext(AuthContext);
  // setTimeout(() => {
  //   Storage.clearToken();
  //   history.push(Routing.LOGIN);
  // }, 5000);

  const fetchData = async () => {
    const { data } = await request.get('/debtors/list');

    setDataDebts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Home
      username={name}
      stateMenu={stateMenu}
      setStateMenu={setStateMenu}
      dataDebts={dataDebts}
    />
  );
};

export default HomeContainer;
