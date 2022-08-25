import React from 'react';
import { Router } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import { Home, Login } from '~/scenes';

import Guest from './guest';
import Private from './private';
import { Routing } from './routing';

const browserHistory = createBrowserHistory();

const RoutesContainer: React.FC = () => (
  <Router history={browserHistory}>
    <Guest exact path={Routing.LOGIN} component={Login} />
    <Private path={Routing.HOME} component={Home} />
  </Router>
);

export { Routing };
export default RoutesContainer;
