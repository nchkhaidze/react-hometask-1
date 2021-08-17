import React from 'react';
import coursesReducer from './reducer';

describe('coursesReducer', () => {
  test('should return initial state', () => {
    expect(coursesReducer(undefined, {})).toEqual({ courses: [] });
  });
});
