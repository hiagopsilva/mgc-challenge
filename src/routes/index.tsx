import React from 'react';
import { Router, Routes } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import { Home, Login } from '~/scenes';

import Guest from './guest';
import Private from './private';
import { Routing } from './routing';

const browserHistory = createBrowserHistory();

const RoutesContainer: React.FC = () => (
  <Router history={browserHistory}>
    <Routes>
      <Guest exact path={Routing.LOGIN} component={Login} />
      <Private path={Routing.HOME} component={Home} />
    </Routes>
</Router>
);

export { Routing };
export default RoutesContainer;
