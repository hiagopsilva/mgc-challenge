import React from 'react';

import { Input, SearchIcon, Wrapper, WrapperSearchIcon } from './styles';

type Props = {};

const Search: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Input placeholder="Pesquisar..." />
      <WrapperSearchIcon>
        <SearchIcon />
      </WrapperSearchIcon>
    </Wrapper>
  );
};

export default Search;
