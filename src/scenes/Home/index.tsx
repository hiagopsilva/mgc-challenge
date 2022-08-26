import React, { useContext } from 'react';

import { BrowserHistory } from 'history';

import { AuthContext } from '~/contexts/auth';
import { Routing } from '~/routes';
import { Storage } from '~/services';

import Home from './Home';

type Props = {
  history: BrowserHistory;
};

const HomeContainer: React.FC<Props> = ({ history }) => {
  const { name } = useContext(AuthContext);
  // setTimeout(() => {
  //   Storage.clearToken();
  //   history.push(Routing.LOGIN);
  // }, 5000);

  return <Home username={name} />;
};

export default HomeContainer;
