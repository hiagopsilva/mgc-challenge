import React from 'react';

import { currencyFormat, formatDate } from '~/utils';

import { Item, TextItem, Wrapper } from './styles';

type Props = {
  dataDebtors: any;
};

const Debtors: React.FC<Props> = ({ dataDebtors }) => {
  return (
    <Wrapper>
      {dataDebtors.map((item: any) => (
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

export default Debtors;
