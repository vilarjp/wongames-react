import { useState, InputHTMLAttributes } from 'react';

import * as SC from './styles';

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  labelFor?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  icon,
  iconPosition = 'left',
  label,
  labelFor = '',
  initialValue = '',
  error,
  disabled = false,
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInput && onInput(newValue);
  };

  return (
    <SC.Wrapper disabled={disabled} error={!!error}>
      {!!label && <SC.Label htmlFor={labelFor}>{label}</SC.Label>}
      <SC.InputWrapper>
        {!!icon && <SC.Icon iconPosition={iconPosition}>{icon}</SC.Icon>}
        <SC.Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          {...props}
        />
      </SC.InputWrapper>
      {!!error && <SC.Error>{error}</SC.Error>}
    </SC.Wrapper>
  );
};

export default TextField;
