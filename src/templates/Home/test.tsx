import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import bannersMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

import Home from '.';

const props = {
  banners: [bannersMock[0]],
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGames: [gamesMock[0]],
  upcomingHighlight: highlightMock,
  upcomingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock,
};

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />);

    // Menu
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();

    // Footer
    expect(
      screen.getByRole('heading', { name: /contact us/i }),
    ).toBeInTheDocument();

    // Menu + Footer logos
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2);

    // News Section
    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument();

    // Most Popular Section
    expect(
      screen.getByRole('heading', { name: /most popular/i }),
    ).toBeInTheDocument();

    // Upcoming Section
    expect(
      screen.getByRole('heading', { name: /upcoming/i }),
    ).toBeInTheDocument();

    // Free Games Section
    expect(
      screen.getByRole('heading', { name: /free games/i }),
    ).toBeInTheDocument();

    // Main Banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1);

    // Card Games ( 5 sections with 1 cards each = 5x1 = 5)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5);

    // Highlights
    expect(screen.getAllByText(/read dead is back!/i)).toHaveLength(3);
  });
});
