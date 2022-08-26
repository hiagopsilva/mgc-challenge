import React from 'react';

import { Loading, Title, WrapperLoading } from './styles';

const LoadingComponent: React.FC = () => {
  return (
    <WrapperLoading>
      <Loading type="spin" />
      <Title>Carregando...</Title>
    </WrapperLoading>
  );
};

export default LoadingComponent;
