import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

jest.mock('./P5Viz/P5Viz', () => () => <div data-testid="p5viz" />);
jest.mock('./Controls/Controls', () => () => <div data-testid="controls" />);

test('renders the app shell', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('p5viz')).toBeInTheDocument();
  expect(getByTestId('controls')).toBeInTheDocument();
});
