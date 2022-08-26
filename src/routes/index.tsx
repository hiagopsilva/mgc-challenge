import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { Home, Login } from '~/scenes';

import Guest from './guest';
import Private from './private';
import { Routing } from './routing';

const RoutesContainer: React.FC = () => (
  <Router>
    <Switch>
      <Guest exact path={Routing.LOGIN} component={Login} />
      <Private path={Routing.HOME} component={Home} />
    </Switch>
  </Router>
);

export { Routing };
export default RoutesContainer;
