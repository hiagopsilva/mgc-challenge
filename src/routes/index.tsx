import React from 'react';
import { Switch } from 'react-router-dom';

import { inject, observer } from 'mobx-react';

import { Home } from '~/scenes';

import Guest from './guest';
import { Routing } from './routing';

const RoutesContainer: React.FC = () => (
  <Switch>
    <Guest path="/" component={Home} />
    <Guest path="/home" component={Home} />
  </Switch>
);

export { Routing };
export default inject('routing')(observer(RoutesContainer));
// export default RoutesContainer;
