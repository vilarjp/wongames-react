import Button from 'components/Button';
import * as SC from './styles';

export type AlignmentPosition = 'right' | 'left';

export type HighlightProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  floatImage?: string;
  buttonLabel: string;
  buttonLink: string;
  alignment?: AlignmentPosition;
};

const Highlight = ({
  title,
  subtitle,
  backgroundImage,
  floatImage,
  buttonLabel,
  buttonLink,
  alignment = 'right',
}: HighlightProps) => {
  return (
    <SC.Wrapper backgroundImage={backgroundImage} alignment={alignment}>
      {!!floatImage && <SC.FloatImage src={floatImage} alt={title} />}
      <SC.Content>
        <SC.Title>{title}</SC.Title>
        <SC.SubTitle>{subtitle}</SC.SubTitle>
        <Button as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </SC.Content>
    </SC.Wrapper>
  );
};

export default Highlight;
