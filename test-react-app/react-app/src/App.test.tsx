import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app header', () => {
  render(<App />);
  const logoElement = screen.getByAltText(/logo/i); // Check for the logo image
  expect(logoElement).toBeInTheDocument();
});
