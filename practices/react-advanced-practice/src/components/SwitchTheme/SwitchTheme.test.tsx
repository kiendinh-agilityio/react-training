import { render, fireEvent } from '@testing-library/react';
import SwitchTheme from '.';

// Don't mock the store, directly use the real implementation
describe('SwitchTheme', () => {
  it('matches the snapshot with Light theme', () => {
    const { asFragment } = render(<SwitchTheme />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('matches the snapshot after theme toggle', () => {
    const { asFragment } = render(<SwitchTheme />);

    fireEvent.click(document.querySelector('button') as HTMLElement);

    expect(asFragment()).toMatchSnapshot();
  });
});
