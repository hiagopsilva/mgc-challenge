import React from 'react';

import { Formik } from '~/utils';

import { initialValues, validationForm } from './form';
import Login from './Login';

type Props = {};

const Home: React.FC<Props> = () => {
  const submitForm = (values: UserType.Login) => {
    console.log(values);
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

export default Home;
