import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import UploadFile from '../UploadFile';

test('Show the uploaded file name after the user uploads a file', () => {
  render(<UploadFile />);
  const inputEl = screen.getByLabelText(/upload file/i);

  const file = new File(['(⌐□_□)'], 'chucknorris.png', {
    type: 'image/png',
  });
  userEvent.upload(inputEl, file);

  expect(screen.getByText(/chucknorris\.png/)).toBeInTheDocument();
});
