import { BannerProps } from 'components/Banner';
import { GameCardProps } from 'components/GameCard';
import Highlight, { HighlightProps } from 'components/Highlight';

import { Container } from 'components/Container';
import Footer from 'components/Footer';
import Heading from 'components/Heading';
import Menu from 'components/Menu';
import GameCardSlider from 'components/GameCardSlider';
import BannerSlider from 'components/BannerSlider';

import * as SC from './styles';

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  upcomingMoreGames: GameCardProps[];
  freeGames: GameCardProps[];
  freeHighlight: HighlightProps;
};

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHighlight,
  upcomingMoreGames,
  freeGames,
  freeHighlight,
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <SC.SectionBanner>
        <BannerSlider items={banners} />
      </SC.SectionBanner>
    </Container>

    <SC.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary">
          News
        </Heading>

        <GameCardSlider items={newGames} color="black" />
      </Container>
    </SC.SectionNews>

    <Container>
      <SC.SectionMostPopular>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>

        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} />
      </SC.SectionMostPopular>

      <SC.SectionUpcoming>
        <Heading lineLeft lineColor="secondary">
          Upcoming
        </Heading>

        <GameCardSlider items={upcomingGames} />
        <Highlight {...upcomingHighlight} />
        <GameCardSlider items={upcomingMoreGames} />
      </SC.SectionUpcoming>

      <SC.SectionFreeGames>
        <Heading lineLeft lineColor="secondary">
          Free Games
        </Heading>

        <Highlight {...freeHighlight} />
        <GameCardSlider items={freeGames} />
      </SC.SectionFreeGames>
    </Container>

    <SC.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </SC.SectionFooter>
  </section>
);

export default Home;
