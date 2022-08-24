import React from 'react';

import { Wrapper, Title, Description, Info } from './styles';

const Welcome: React.FC = () => {
  return (
    <Wrapper>
      <div>
        <Title>
          Bem vindo, <br />
          ao Template Frontend
        </Title>

        <Description>
          Este template é para criar projetos frontend com alguns pacotes e
          padrões de pasta, além dos códigos mais recentes, utilizados por mim.
        </Description>

        <Info>
          Feito por <span>@hiagopsilva</span>
        </Info>
      </div>
    </Wrapper>
  );
};

export default Welcome;
