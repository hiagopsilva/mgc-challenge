import React from 'react';

import { Logo } from '~/assets';
import { FormikProps, useFormikContext } from '~/utils';

import {
  Button,
  Container,
  Content,
  Description,
  Image,
  Title,
  WrapperLogo,
  TextInputStyled,
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

        <TextInputStyled
          value={values.user}
          name="user"
          id="user"
          onChange={handleChange('user')}
          error={touched.user ? !!errors.user : false}
          label="User"
        />

        <TextInputStyled
          label="Senha"
          value={values.password}
          name="password"
          id="password"
          onChange={handleChange('password')}
          error={touched.password ? !!errors.password : false}
          type="password"
        />

        <Button onClick={submitForm} type="button">
          <span>login</span>
        </Button>
      </Content>
    </Container>
  );
};

export default Login;
