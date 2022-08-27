import React from 'react';

import { Input, SearchIcon, Wrapper, WrapperSearchIcon } from './styles';

type Props = {
  value: string;

  OnChange: (values: string) => void;
  OnClick: () => void;
};

const Search: React.FC<Props> = ({ OnChange, value, OnClick }) => {
  return (
    <Wrapper>
      <Input
        placeholder="Pesquisar por nome..."
        onChange={e => OnChange(e.target.value)}
        value={value}
      />
      <WrapperSearchIcon onClick={OnClick}>
        <SearchIcon />
      </WrapperSearchIcon>
    </Wrapper>
  );
};

export default Search;
