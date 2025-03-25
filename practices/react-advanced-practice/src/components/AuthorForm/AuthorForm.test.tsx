import { render, fireEvent, screen, act } from '@testing-library/react';
import AuthorForm from '.';
import { PROFILE_AUTHORS } from '@/mocks';
import { Author } from '@/types';

const mockProps = {
  isUpdate: false,
  selectedAuthor: PROFILE_AUTHORS,
  closeModal: jest.fn(),
  onSubmit: jest.fn(),
};

describe('AuthorForm', () => {
  it('should render correctly with default props', () => {
    const { container } = render(<AuthorForm {...mockProps} />);
    expect(container).toMatchSnapshot();
  });

  it('should render correctly in update mode', () => {
    render(<AuthorForm {...mockProps} isUpdate />);
    expect(screen.getByText('EDIT AUTHOR')).toBeInTheDocument();
  });

  it('should render correctly with empty selectedAuthor', () => {
    render(<AuthorForm {...mockProps} selectedAuthor={{} as Author} />);
    expect(screen.getByPlaceholderText('Please enter name')).toBeInTheDocument();
  });

  it('should handle input field changes correctly', async () => {
    render(<AuthorForm {...mockProps} />);

    const nameInput = screen.getByPlaceholderText('Please enter name');
    const emailInput = screen.getByPlaceholderText('Please enter email address');
    const avatarInput = screen.getByPlaceholderText('Please enter link image');

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: 'New Author' } });
      fireEvent.change(emailInput, { target: { value: 'author@example.com' } });
      fireEvent.change(avatarInput, {
        target: { value: 'http://example.com/avatar.jpg' },
      });
    });

    expect(nameInput).toHaveValue('New Author');
    expect(emailInput).toHaveValue('author@example.com');
    expect(avatarInput).toHaveValue('http://example.com/avatar.jpg');
  });

  it('should validate invalid email format', async () => {
    render(<AuthorForm {...mockProps} />);
    const emailInput = screen.getByPlaceholderText('Please enter email address');

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
      fireEvent.blur(emailInput);
    });

    expect(await screen.findByText('Email is invalid')).toBeInTheDocument();
  });

  it('should validate invalid avatar URL format', async () => {
    render(<AuthorForm {...mockProps} />);
    const avatarInput = screen.getByPlaceholderText('Please enter link image');

    await act(async () => {
      fireEvent.change(avatarInput, { target: { value: 'invalid-url' } });
      fireEvent.blur(avatarInput);
    });

    expect(await screen.findByText('Avatar URL must be a valid URL')).toBeInTheDocument();
  });

  it('should disable submit button correctly in update mode when no changes', () => {
    render(<AuthorForm {...mockProps} isUpdate />);
    const submitButton = screen.getByText('Save');
    expect(submitButton).toBeDisabled();
  });

  it('should call closeModal when cancel button is clicked', async () => {
    render(<AuthorForm {...mockProps} />);
    const cancelButton = screen.getByText('Cancel');

    await act(async () => {
      fireEvent.click(cancelButton);
    });

    expect(mockProps.closeModal).toHaveBeenCalled();
  });
});
