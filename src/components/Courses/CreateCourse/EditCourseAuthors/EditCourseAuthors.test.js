import React from 'react';
import { render, screen, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import EditCourseAuthors from './EditCourseAuthors';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { mockAuthors } from '../../../../models/mocks';

describe('EditCourseAuthors', () => {
  const store = configureStore({ reducer: () => {} });

  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <EditCourseAuthors
            allAuthors={mockAuthors}
            courseAuthors={[]}
            authorName='123123a'
          />
        </BrowserRouter>
      </Provider>
    );
  });

  test('should render authors list', () => {
    const allAuthors = screen.getByTestId('all-authors');
    expect(getByText(allAuthors, mockAuthors[0].name)).toBeInTheDocument();
    expect(getByText(allAuthors, mockAuthors[1].name)).toBeInTheDocument();
  });
});
