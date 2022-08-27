import styled from 'styled-components';

import { Close, Search } from '~/assets';
import { getTheme, pxToRem } from '~/utils';

const primaryBorder = getTheme('primary.border');
const primaryMain = getTheme('primary.main');
const primaryContrast = getTheme('primary.contrast');

export const Wrapper = styled.div`
  width: 95%;
  height: ${pxToRem(60)};

  margin: 0 auto;

  display: flex;

  border: 1px solid ${primaryBorder};
  border-radius: ${pxToRem(4)};
`;

export const Input = styled.input`
  font-size: ${pxToRem(16)};
  width: 86%;

  padding: 0 ${pxToRem(16)};
  border: none;
`;

export const WrapperSearchIcon = styled.div`
  width: ${pxToRem(70)};
  border-bottom-right-radius: ${pxToRem(4)};
  border-top-right-radius: ${pxToRem(4)};

  cursor: pointer;
  background-color: ${primaryMain};

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: auto;

  &:hover {
    background-color: ${primaryContrast};
  }
`;

export const SearchIcon = styled(Search)``;

export const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
`;

export const IconClose = styled(Close)`
  margin: auto;

  cursor: pointer;
`;
