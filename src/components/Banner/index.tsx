import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon';
import Button from 'components/Button';

import * as SC from './styles';

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  ribbon?: React.ReactNode;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
};

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'normal',
}: BannerProps) => {
  return (
    <SC.Wrapper>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}

      <SC.Image src={img} role="img" aria-label={title} />

      <SC.Caption>
        <SC.Title>{title}</SC.Title>
        <SC.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
        <Button as="a" href={buttonLink} size="large">
          {buttonLabel}
        </Button>
      </SC.Caption>
    </SC.Wrapper>
  );
};

export default Banner;
