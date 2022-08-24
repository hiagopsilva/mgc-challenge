import React from 'react';

import { Home, Login } from '~/scenes';

import Guest from './guest';
import Private from './private';
import { Routing } from './routing';

const RoutesContainer: React.FC = () => (
  <>
    <Guest exact path={Routing.LOGIN} component={Login} />
    <Private path={Routing.HOME} component={Home} />
  </>
);

export { Routing };
export default RoutesContainer;
