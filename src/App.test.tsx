//user test
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world', () => {
  render(<App />);
  const testMessage = screen.getByText("Hello world");
  expect(testMessage).toBeInTheDocument();
});
