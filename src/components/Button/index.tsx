import React from 'react';

import { Wrapper } from './styles';

type Props = {
  label: string;
  onClick: () => void;
};

const ButtonComponent: React.FC<Props> = ({ onClick, label, ...rest }) => {
  return (
    <Wrapper onClick={onClick} {...rest}>
      <span>{label}</span>
    </Wrapper>
  );
};

export default ButtonComponent;
