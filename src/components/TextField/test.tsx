import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Email } from '@styled-icons/material-outlined';

import { renderWithTheme } from 'utils/tests/helpers';

import TextField from '.';

describe('<TextField />', () => {
  it('should render with Label', () => {
    renderWithTheme(<TextField label="Label" labelFor="Field" id="Field" />);

    expect(screen.getByLabelText('Label')).toBeInTheDocument();
  });

  it('should render without Label', () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument();
  });

  it('should render with placeholder', () => {
    renderWithTheme(<TextField placeholder="any placeholder" />);

    expect(screen.getByPlaceholderText('any placeholder')).toBeInTheDocument();
  });

  it('should render with Icon', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />);

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render with Icon on the right side', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />,
    );

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({
      order: 1,
    });
  });

  it('should change its value when typing', async () => {
    const onInput = jest.fn();
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />,
    );

    const input = screen.getByRole('textbox');
    const text = 'any text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });
    expect(onInput).toHaveBeenCalledWith(text);
  });

  it('should be accessible by tab', () => {
    renderWithTheme(
      <TextField label="TextField" labelFor="TextField" id="TextField" />,
    );

    const input = screen.getByLabelText('TextField');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });

  it('should not change its value when disabled', async () => {
    const onInput = jest.fn();
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />,
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();

    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });
    expect(onInput).not.toHaveBeenCalled();
  });

  it('should not be accessible by tab when disabled', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />,
    );

    const input = screen.getByLabelText('TextField');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).not.toHaveFocus();
  });

  it('should render with error', () => {
    const { container } = renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        error="Error message"
      />,
    );

    expect(screen.getByText('Error message')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
