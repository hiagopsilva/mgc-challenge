import React from 'react';

import { currencyFormat } from '~/utils';

import { Item, TextItem, TextItemMessage, Wrapper } from './styles';

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
            {`${item.ativo}` ? ' SIM' : ' NÃO'}
          </TextItem>
          <TextItem>
            <span className="label">Aceito: </span>
            {`${item.aceito}` ? ' SIM' : ' NÃO'}
            <br />
          </TextItem>

          <TextItemMessage className="message">
            <span className="label">Mensagem: </span>
            {item.msg}
          </TextItemMessage>
        </Item>
      ))}
    </Wrapper>
  );
};

export default Agreements;
