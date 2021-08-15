import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Courses from './Courses';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import * as redux from 'react-redux';

describe('Courses', () => {
  const store = configureStore({ reducer: () => {} });
  const spy = jest.spyOn(redux, 'useSelector');
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Courses />
        </BrowserRouter>
      </Provider>
    );
  });

  test('should render course-list', () => {
    spy.mockReturnValue({
      courses: {
        courses: [],
      },
      authors: { authors: [] },
    });
    expect(screen.getByTestId('course-list')).toBeInTheDocument();
  });
});
