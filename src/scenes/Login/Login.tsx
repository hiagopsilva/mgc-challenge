import React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '~/assets';
import { Routing } from '~/routes';

import {
  Button,
  Container,
  Content,
  Description,
  Image,
  Input,
  Line,
  Text,
  Title,
  WrapperLogo,
} from './styles';

type Props = {};

const Login: React.FC<Props> = () => (
  <Container>
    <WrapperLogo>
      <Image src={`${Logo}`} alt="Logo Template" />
    </WrapperLogo>
    <Content>
      <Title>MGC Holding challenge</Title>

      <Description>Bem vindo de volta, insira seus dados de login.</Description>

      <Line>
        <Text>Email</Text>

        <Input />
      </Line>

      <Line className="last-child">
        <Text>Senha</Text>

        <Input />
      </Line>

      <Button>
        <Link to={Routing.HOME}>Login</Link>
      </Button>
    </Content>
  </Container>
);

export default Login;
