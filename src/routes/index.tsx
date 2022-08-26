import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import { Home, Login } from '~/scenes';

import Guest from './guest';
import Private from './private';
import { Routing } from './routing';

const browserHistory = createBrowserHistory();

const RoutesContainer: React.FC = () => (
  <Router history={browserHistory}>
    <Switch>
      <Guest exact path={Routing.LOGIN} component={Login} />
      <Private path={Routing.HOME} component={Home} />
    </Switch>
</Router>
);

export { Routing };
export default RoutesContainer;
