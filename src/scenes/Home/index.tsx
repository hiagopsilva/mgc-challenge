/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { Logo } from '~/assets';
import { Welcome } from '~/components';
import { Storage } from '~/services';

import { Container, WrapperBackground, Image, Content } from './styles';

type Props = {};

const Home: React.FC<Props> = () => {
  setTimeout(() => {
    Storage.clearToken();
  }, 5000);

  return (
    <Container>
      <Welcome />
      <Content>
        <WrapperBackground>
          <Image src={`${Logo}`} alt="Logo Template" />
        </WrapperBackground>
      </Content>
    </Container>
  );
};

export default Home;
