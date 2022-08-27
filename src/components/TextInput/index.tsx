import React from 'react';

import { Input, Text, Wrapper } from './styles';

type Props = {
  value: string;
  name: string;
  id: string;
  error: boolean;
  label: string;
  type?: string;

  onChange: (values: any) => void;
};

const InputComponent: React.FC<Props> = ({
  value,
  name,
  id,
  onChange,
  error,
  label,
  type,
  ...rest
}) => {
  return (
    <Wrapper {...rest}>
      <Text>{label}</Text>

      <Input
        value={value}
        name={name}
        id={id}
        onChange={onChange}
        error={error}
        type={type}
      />
    </Wrapper>
  );
};

export default InputComponent;
