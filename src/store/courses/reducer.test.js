import React from 'react';
import coursesReducer from './reducer';
import store from '../index';
import { addCourse, fetchCourses } from './thunk';
import { mockCourses } from '../../models/mocks';

describe('coursesReducer', () => {
  test('should return initial state', () => {
    expect(coursesReducer(undefined, {})).toEqual({ courses: [] });
  });

  test('should handle add courses', () => {
    expect(
      coursesReducer({ courses: [] }, addCourse.fulfilled(mockCourses))
    ).toEqual({ courses: mockCourses });
  });

  test('should handle get courses', () => {
    expect(
      coursesReducer({ courses: [] }, fetchCourses.fulfilled(mockCourses))
    ).toEqual({
      courses: mockCourses,
    });
  });
});
