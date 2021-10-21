import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import EditCourseAuthors from './EditCourseAuthors';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { mockAuthors } from '../../../../models/mocks';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import authorsReducer from '../../../../store/authors/reducer';
import coursesReducer from '../../../../store/courses/reducer';
import usersReducer from '../../../../store/user/reducer';
import CourseForm from '../CourseForm/CourseForm';

describe('EditCourseAuthors', () => {
  const handlers = [
    rest.post('http://localhost:3000/authors/add', (req, res, ctx) => {
      return res(
        ctx.json({ result: { name: 'Aasd', id: '227' } }),
        ctx.delay(150)
      );
    }),
  ];

  const server = setupServer(...handlers);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('should render authors', async () => {
    const store = configureStore({
      reducer: {
        users: usersReducer,
        courses: coursesReducer,
        authors: authorsReducer,
      },
    });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CourseForm editMode />
        </BrowserRouter>
      </Provider>
    );
    fireEvent.change(screen.getByTestId('authorName'), {
      target: { value: 'Aasd' },
    });
    fireEvent.click(screen.getByText('Create author'));
    expect(await screen.findByText('Aasd')).toBeInTheDocument();
  });
});
