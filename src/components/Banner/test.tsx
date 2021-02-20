import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Banner from '.';

const bannerProps = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death',
};

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...bannerProps} />);

    expect(
      screen.getByRole('heading', { name: bannerProps.title }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /Play the new CrashLands season/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: bannerProps.title }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...bannerProps}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />,
    );

    const ribbon = screen.getByText(/My Ribbon/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' });
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem',
    });
  });
});
