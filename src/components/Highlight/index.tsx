import Button from 'components/Button';
import * as SC from './styles';

export type HighlightProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  floatImage?: string;
  buttonLabel: string;
  buttonLink: string;
  alignment?: 'right' | 'left';
};

const Highlight = ({
  title,
  subtitle,
  backgroundImage,
  floatImage,
  buttonLabel,
  buttonLink,
  alignment = 'right',
}: HighlightProps) => (
  <SC.Wrapper alignment={alignment} backgroundImage={backgroundImage}>
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

export default Highlight;
