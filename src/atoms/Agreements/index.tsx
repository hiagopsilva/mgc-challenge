import React from 'react';

import { currencyFormat } from '~/utils';

import { Item, TextItem, Wrapper } from './styles';

type Props = {
  dataAgreements: any;
};

const Agreements: React.FC<Props> = ({ dataAgreements }) => {
  return (
    <Wrapper>
      {dataAgreements.map((item: any) => (
        <Item key={item.id}>
          <TextItem>{currencyFormat(item.valor)}</TextItem>
          <TextItem>{item.parcelas}</TextItem>
          <TextItem>{item.vencimento}</TextItem>
          <TextItem>{item.msg}</TextItem>
          <TextItem>
            ATIVO:
            {`${item.ativo}` ? ' SIM' : ' NÃO'}
          </TextItem>
          <TextItem>
            ACEITO:
            {`${item.aceito}` ? ' SIM' : ' NÃO'}
          </TextItem>
        </Item>
      ))}
    </Wrapper>
  );
};

export default Agreements;
