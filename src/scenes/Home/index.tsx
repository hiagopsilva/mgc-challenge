import React, { useContext, useState } from 'react';

import { BrowserHistory } from 'history';

import { AuthContext } from '~/contexts/auth';

import Home from './Home';

type Props = {
  history: BrowserHistory;
};

const HomeContainer: React.FC<Props> = () => {
  const [stateMenu, setStateMenu] = useState('Debtors');

  const { name } = useContext(AuthContext);
  // setTimeout(() => {
  //   Storage.clearToken();
  //   history.push(Routing.LOGIN);
  // }, 5000);

  return (
    <Home username={name} stateMenu={stateMenu} setStateMenu={setStateMenu} />
  );
};

export default HomeContainer;
