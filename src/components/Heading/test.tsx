import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Heading from '.';
import theme from 'styles/theme';

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color={'black'}>Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: theme.colors.black,
    });
  });

  it('should render a with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.primary}`,
    });
  });

  it('should render a with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.primary}`,
      {
        modifier: '::after',
      },
    );
  });

  it('should render a heading with a small size', () => {
    renderWithTheme(
      <Heading lineBottom size="small">
        Won Games
      </Heading>,
    );

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '1.6rem',
    });

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after',
      },
    );
  });

  it('should render a heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineBottom lineColor="secondary">
        Won Games
      </Heading>,
    );

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.secondary}`,
      {
        modifier: '::after',
      },
    );
  });
});
