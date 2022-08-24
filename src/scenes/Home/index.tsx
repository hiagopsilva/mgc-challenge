/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { Logo } from '~/assets';
import { Welcome } from '~/components';

import { Container, WrapperBackground, Image, Content } from './styles';

type Props = {};

const Home: React.FC<Props> = () => (
  <Container>
    <Welcome />
    <Content>
      <WrapperBackground>
        <Image src={`${Logo}`} alt="Logo Template" />
      </WrapperBackground>
    </Content>
  </Container>
);

export default Home;
