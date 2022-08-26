import React, { useEffect } from 'react';

import { Logo } from '~/assets';
import { TextInput } from '~/components';
import { alert, FormikProps, useFormikContext } from '~/utils';

import {
  Button,
  Container,
  Content,
  Description,
  Image,
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
    if (errors.user || errors.password)
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

        <TextInput
          value={values.user}
          name="user"
          id="user"
          onChange={handleChange('user')}
          error={touched.user ? !!errors.user : false}
          label="User"
        />

        <TextInput
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
