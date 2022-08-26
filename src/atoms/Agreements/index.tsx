import React from 'react';

import { currencyFormat, hasMessage, hasValue } from '~/utils';

import { Item, TextItem, Wrapper } from './styles';

type Props = {
  dataAgreements: any;
};

const Agreements: React.FC<Props> = ({ dataAgreements }) => {
  return (
    <Wrapper>
      {dataAgreements.map((item: any) => (
        <Item key={item.id}>
          <TextItem>
            <span className="label">R$ </span>
            {currencyFormat(item.valor)}
          </TextItem>
          <TextItem>
            <span className="label">Parcelas: </span>
            {item.parcelas}
          </TextItem>
          <TextItem>
            <span className="label">Vencimento: </span>
            {item.vencimento}
          </TextItem>

          <TextItem>
            <span className="label">Ativo: </span>
            {hasValue(item.ativo)}
          </TextItem>
          <TextItem>
            <span className="label">Aceito: </span>
            {hasValue(item.aceito)}
          </TextItem>

          <TextItem message>
            <span className="label">Mensagem: </span>
            {hasMessage(item.msg)}
          </TextItem>
        </Item>
      ))}
    </Wrapper>
  );
};

export default Agreements;
