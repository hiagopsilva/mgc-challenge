import React from 'react';
import { Route } from 'react-router-dom';

import { Location } from 'history';

type Props = {
  component: React.ElementType;
  location?: Location;
  path: string;
  exact?: boolean;
};

const PublicRoute: React.FC<Props> = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props): JSX.Element => <Component {...props} />} />
);

export default PublicRoute;
