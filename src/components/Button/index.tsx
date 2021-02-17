import React from 'react';

import * as SC from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <SC.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </SC.Wrapper>
  );
};

export default Button;
