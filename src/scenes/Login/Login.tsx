import React from 'react';
import { Link } from 'react-router-dom';

import { Routing } from '~/routes';

import { Container, Content } from './styles';

type Props = {};

const Login: React.FC<Props> = () => (
  <Container>
    <Content>scene login</Content>
    <Link to={Routing.HOME}>Ola</Link>
  </Container>
);

export default Login;
