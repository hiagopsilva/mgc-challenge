import React from 'react';

import { formatCPF, formatDate } from '~/utils';

import { Item, TextItem, Wrapper } from './styles';

type Props = {
  dataDebtors: any;
};

const Debts: React.FC<Props> = ({ dataDebtors }) => {
  return (
    <Wrapper>
      {dataDebtors.map((item: any) => (
        <Item key={item.id}>
          <TextItem>{formatCPF(item.cpf)}</TextItem>
          <TextItem>{item.nome}</TextItem>
          <TextItem>{formatDate(item.dataNascimento, true)}</TextItem>
        </Item>
      ))}
    </Wrapper>
  );
};

export default Debts;
