import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as SC from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  minimal?: boolean;
  icon?: React.ReactNode;
  as?: React.ElementType;
} & ButtonTypes;

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  minimal = false,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <SC.Wrapper
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      minimal={minimal}
      {...props}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </SC.Wrapper>
  );
};

export default Button;
