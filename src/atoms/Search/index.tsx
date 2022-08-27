import React from 'react';

import { If } from '~/components';
import { isEmpty } from '~/utils';

import {
  ButtonClose,
  IconClose,
  Input,
  SearchIcon,
  Wrapper,
  WrapperSearchIcon,
} from './styles';

type Props = {
  value: string;

  OnChange: (values: string) => void;
  OnClick: () => void;
  clearSearch: () => void;
};

const Search: React.FC<Props> = ({ OnChange, clearSearch, value, OnClick }) => {
  return (
    <Wrapper>
      <Input
        placeholder="Pesquisar por nome..."
        onChange={e => OnChange(e.target.value)}
        value={value}
      />
      <If condition={!isEmpty(value)}>
        <ButtonClose type="button" onClick={clearSearch}>
          <IconClose />
        </ButtonClose>
      </If>
      <WrapperSearchIcon onClick={OnClick}>
        <SearchIcon />
      </WrapperSearchIcon>
    </Wrapper>
  );
};

export default Search;
