import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import * as redux from 'react-redux';

describe('Header', () => {
  const store = configureStore({ reducer: () => {} });
  const spy = jest.spyOn(redux, 'useSelector');
  beforeEach(() => {
    spy.mockReturnValue('name');
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
  });

  test('should display logo', () => {
    expect(screen.getByAltText('Site logo')).toBeInTheDocument();
  });

  test('should display button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('should display username', () => {
    expect(screen.getByText('name')).toBeInTheDocument();
  });
});
