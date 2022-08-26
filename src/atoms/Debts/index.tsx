import React from 'react';

import { currencyFormat, formatDate, hasValue } from '~/utils';

import { Item, TextItem, Wrapper } from './styles';

type Props = {
  dataDebts: any;
};

const Debts: React.FC<Props> = ({ dataDebts = {} }) => {
  return (
    <Wrapper>
      {dataDebts.map((item: any) => (
        <Item key={item.id}>
          <TextItem>
            <span className="label">Carteira: </span>
            {item.carteira}
          </TextItem>
          <TextItem>
            <span className="label">Data: </span>

            {formatDate(item.data)}
          </TextItem>
          <TextItem>
            <span className="label">R$: </span>
            {currencyFormat(item.valor)}
          </TextItem>
          <TextItem>
            <span className="label">Ativo: </span>
            {hasValue(item.ativo)}
          </TextItem>
          <TextItem>
            <span className="label">Bucket: </span>
            {item.bucket}
          </TextItem>
        </Item>
      ))}
    </Wrapper>
  );
};

export default Debts;
