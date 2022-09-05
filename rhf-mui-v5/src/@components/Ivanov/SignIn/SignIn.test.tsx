import React from 'react';
import { act } from 'react-dom/test-utils';

import { fireEvent, render, screen } from '@testing-library/react';

import SignIn from './SignIn';

const mockOnSubmit = jest.fn();

describe('SignIn', () => {
  describe('with valid inputs', () => {
    it('calls the onSubmit function', async () => {
      const { getByLabelText, getByRole } = render(
        <SignIn onSubmit={mockOnSubmit} />,
      );

      await act(async () => {
        fireEvent.change(getByLabelText('Email Address *'), {
          target: { value: 'email@test.com' },
        });
        fireEvent.change(getByLabelText('Password *'), {
          target: { value: '1234567' },
        });
      });

      await act(async () => {
        fireEvent.click(getByRole('button'));
      });

      expect(mockOnSubmit).toHaveBeenCalled();
    });

    it('should have a submit button', async () => {
      await act(async () => {
        render(<SignIn />);
      });
      expect(screen.getByText('Sign in')).toBeInTheDocument();
    });
  });

  describe('with invalid email', () => {
    it('renders the email validation error', async () => {
      const { getByLabelText, container } = render(<SignIn />);

      await act(async () => {
        const emailInput = getByLabelText('Email Address *');
        fireEvent.change(emailInput, { target: { value: 'invalid email' } });
        fireEvent.blur(emailInput);
      });

      expect(container.innerHTML).toMatch('Enter a valid email');
    });
  });

  describe('with invalid password', () => {
    it('renders the password validation error', async () => {
      const { getByLabelText, container } = render(<SignIn />);

      await act(async () => {
        const paswordInput = getByLabelText('Password *');
        fireEvent.change(paswordInput, { target: { value: '123' } });
        fireEvent.blur(paswordInput);
      });

      expect(container.innerHTML).toMatch(
        'Password should be longer than 6 characters',
      );
    });
  });
});
