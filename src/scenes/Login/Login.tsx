import React from 'react';

import { Logo } from '~/assets';
import { FormikProps, useFormikContext } from '~/utils';

import {
  Container,
  Content,
  Description,
  Image,
  Title,
  WrapperLogo,
  TextInputStyled,
  ButtonStyled,
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

        <ButtonStyled onClick={submitForm} label="login" />
      </Content>
    </Container>
  );
};

export default Login;
