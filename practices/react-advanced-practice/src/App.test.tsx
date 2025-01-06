import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders heading', async () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Authors Table' })).toBeInTheDocument();
  });
});
