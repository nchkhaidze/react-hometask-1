import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CourseList from './CourseList';
import { BrowserRouter } from 'react-router-dom';
import { mockAuthors, mockCourses } from '../../../models/mocks';

describe('CourseList', () => {
  test('should display empty container if if courses array is empty', () => {
    render(
      <BrowserRouter>
        <CourseList
          courses={[]}
          authors={mockAuthors}
          displayFilteredResults={false}
        />
      </BrowserRouter>
    );
    expect(screen.queryByTestId('course-card')).not.toBeInTheDocument();
  });

  test('should render amount of course cards equal to courses.length', () => {
    render(
      <BrowserRouter>
        <CourseList
          courses={mockCourses}
          authors={mockAuthors}
          displayFilteredResults={false}
        />
      </BrowserRouter>
    );
    expect(screen.getAllByTestId('course-card')).toHaveLength(
      mockCourses.length
    );
  });
});
