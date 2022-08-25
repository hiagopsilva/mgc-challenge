import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '~/assets';
import { Routing } from '~/routes';
import { alert, FormikProps, useFormikContext } from '~/utils';

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

const Login: React.FC<Props> = () => {
  const {
    values,
    submitForm,
    handleChange,
    errors,
    touched,
  }: FormikProps<UserType.Login> = useFormikContext();

  useEffect(() => {
    if (errors.email || errors.password)
      return alert({
        message: 'Por favor, preencha todos os campos corretamente!',
        type: 'error',
      });
  }, [touched]);

  return (
    <Container>
      <WrapperLogo>
        <Image src={`${Logo}`} alt="Logo Template" />
      </WrapperLogo>
      <Content>
        <Title>MGC Holding challenge</Title>

        <Description>
          Bem vindo de volta, insira seus dados de login.
        </Description>

        <Line>
          <Text>Email</Text>

          <Input
            value={values.email}
            name="email"
            id="email"
            type="email"
            onChange={handleChange('email')}
            error={touched.email ? !!errors.email : false}
          />
        </Line>

        <Line className="last-child">
          <Text>Senha</Text>

          <Input
            value={values.password}
            name="password"
            id="password"
            onChange={handleChange('password')}
            error={touched.password ? !!errors.password : false}
            type="password"
          />
        </Line>

        <Button onClick={submitForm}>
          <Link to={Routing.HOME}>Login</Link>
        </Button>
      </Content>
    </Container>
  );
};

export default Login;
