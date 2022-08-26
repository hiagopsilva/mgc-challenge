import React from 'react';

import { ContentOption, Option, Wrapper } from './styles';

type Props = {
  stateMenu: string;
  setStateMenu: (value: string) => void;
};

const Navigation: React.FC<Props> = ({ stateMenu, setStateMenu }) => {
  return (
    <Wrapper>
      <ContentOption>
        <Option onClick={() => setStateMenu('Debtors')}>
          <div className={stateMenu === 'Debtors' ? 'active' : ''} />
          <span className={stateMenu === 'Debtors' ? 'active' : ''}>
            Debtors
          </span>
        </Option>

        <Option onClick={() => setStateMenu('Debts')}>
          <div className={stateMenu === 'Debts' ? 'active' : ''} />
          <span className={stateMenu === 'Debts' ? 'active' : ''}>Debts</span>
        </Option>

        <Option onClick={() => setStateMenu('Agreements')}>
          <div className={stateMenu === 'Agreements' ? 'active' : ''} />
          <span className={stateMenu === 'Agreements' ? 'active' : ''}>
            Agreements
          </span>
        </Option>
      </ContentOption>
    </Wrapper>
  );
};

export default Navigation;
