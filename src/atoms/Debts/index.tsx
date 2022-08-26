import React from 'react';

import { currencyFormat, formatDate } from '~/utils';

import { Item, TextItem, Wrapper } from './styles';

type Props = {
  dataDebts: any;
};

const Debts: React.FC<Props> = ({ dataDebts = {} }) => {
  return (
    <Wrapper>
      {dataDebts.map((item: any) => (
        <Item key={item.id}>
          <TextItem>{item.carteira}</TextItem>
          <TextItem>{formatDate(item.data)}</TextItem>
          <TextItem>{currencyFormat(item.valor)}</TextItem>
          <TextItem>
            ATIVO:
            {`${item.ativo}` ? ' SIM' : ' NÃO'}
          </TextItem>
          <TextItem>{item.bucket}</TextItem>
        </Item>
      ))}
    </Wrapper>
  );
};

export default Debts;
