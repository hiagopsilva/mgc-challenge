import React from 'react';

import { Home, Login } from '~/scenes';
import { Router, Switch } from '~/utils';

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
