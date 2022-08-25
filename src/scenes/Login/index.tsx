/* eslint-disable import-helpers/order-imports */
import React, { useContext } from 'react';

import { BrowserHistory, Formik } from '~/utils';
import { AuthContext } from '~/contexts/auth';

import { Routing } from '~/routes';
import { initialValues, validationForm } from './form';
import Login from './Login';

type Props = {
  history: BrowserHistory;
};

const LoginContainer: React.FC<Props> = ({ history }) => {
  const { signIn } = useContext(AuthContext);

  const submitForm = async (values: UserType.Login) => {
    const response = await signIn(values);

    response && history.push(Routing.HOME);
  };

  return (
    <Formik
      validationSchema={validationForm}
      initialValues={initialValues}
      onSubmit={submitForm}
    >
      <Login />
    </Formik>
  );
};

export default LoginContainer;
