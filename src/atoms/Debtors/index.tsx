import React from 'react';

import { formatCPF, formatDate } from '~/utils';

import { Item, TextItem, Wrapper } from './styles';

type Props = {
  dataDebtors: any;
};

const Debtors: React.FC<Props> = ({ dataDebtors }) => {
  return (
    <Wrapper>
      {dataDebtors.map((item: any) => (
        <Item key={item.id}>
          <TextItem>
            <span className="label">CPF: </span>
            {formatCPF(item.cpf)}
          </TextItem>
          <TextItem>
            <span className="label">Nome: </span>
            {item.nome}
          </TextItem>
          <TextItem>
            <span className="label">Data de nasc.: </span>
            {formatDate(item.dataNascimento, true)}
          </TextItem>
        </Item>
      ))}
    </Wrapper>
  );
};

export default Debtors;
