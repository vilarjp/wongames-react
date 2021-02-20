import * as SC from './styles';

export type RibbonColors = 'primary' | 'secondary';
export type RibbonSizes = 'normal' | 'small';

export type RibbonProps = {
  children: React.ReactNode;
  color?: RibbonColors;
  size?: RibbonSizes;
};

const Ribbon = ({
  children,
  color = 'primary',
  size = 'normal',
}: RibbonProps) => {
  return (
    <SC.Wrapper color={color} size={size}>
      {children}
    </SC.Wrapper>
  );
};

export default Ribbon;
