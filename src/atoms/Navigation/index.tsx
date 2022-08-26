import React from 'react';

import { OPTION_NAVIGATION } from '~/utils';

import { ContentOption, Option, Wrapper } from './styles';

type Props = {
  stateMenu: string;
  setStateMenu: (value: string) => void;
};

const Navigation: React.FC<Props> = ({ stateMenu, setStateMenu }) => {
  return (
    <Wrapper>
      <ContentOption>
        {OPTION_NAVIGATION.map(item => (
          <Option onClick={() => setStateMenu(item)}>
            <div className={stateMenu === item ? 'active' : ''} />

            <span className={stateMenu === item ? 'active' : ''}>{item}</span>
          </Option>
        ))}
      </ContentOption>
    </Wrapper>
  );
};

export default Navigation;
