import { InputHTMLAttributes } from 'react';

import * as SC from './styles';

type RadioValue = string | ReadonlyArray<string> | number;

export type RadioProps = {
  onCheck?: (value?: RadioValue) => void;
  label?: string;
  labelColor?: 'white' | 'black';
  labelFor?: string;
  value?: RadioValue;
} & InputHTMLAttributes<HTMLInputElement>;

const Radio = ({
  label,
  onCheck,
  labelColor = 'white',
  labelFor = '',
  value,
  ...props
}: RadioProps) => {
  const onChange = () => {
    !!onCheck && onCheck(value);
  };

  return (
    <SC.Wrapper>
      <SC.Input
        id={labelFor}
        type="radio"
        value={value}
        onChange={onChange}
        {...props}
      />
      {!!label && (
        <SC.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </SC.Label>
      )}
    </SC.Wrapper>
  );
};

export default Radio;
