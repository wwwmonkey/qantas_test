import { render, screen } from '@testing-library/react';
import App from './App';

// Basic test if App is loading and image found
test('header image rendered with alt text', () => {
  render(<App />);
  const image = screen.getByAltText('qantas logo');
  expect(image).toBeInTheDocument();
});

// it('renders welcome message', () => {
//   render(<App />);
//   expect(screen.getByText('Learn React')).toBeInTheDocument();
// });
