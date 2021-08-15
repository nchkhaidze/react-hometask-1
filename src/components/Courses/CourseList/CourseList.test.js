import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as redux from 'react-redux';
import CourseList from './CourseList';
import { BrowserRouter } from 'react-router-dom';

describe('CourseList', () => {
  const courses = [
    {
      title: 'HOW ARE U',
      description: 'HOW ARE h',
      duration: 55,
      authors: ['7b448530-7e0c-4784-a43e-b1216f28e31e'],
      creationDate: '10/08/2021',
      id: 'c9eb8415-fd6e-4260-bf94-751be38ba67f',
    },
    {
      title: 'MEGA KILL!!!!!!!',
      description: 'MEGA KILL!!!!!!!',
      duration: 1,
      authors: [
        '7b448530-7e0c-4784-a43e-b1216f28e31e',
        '0cfead78-57ef-4497-b37c-5768f3a4faad',
        '4d8d7221-eab6-44ff-aa78-5a62ee0504a6',
      ],
      creationDate: '11/08/2021',
      id: '90c29ff9-d142-4fb1-8a74-a7b115e41e68',
    },
  ];
  const authors = [
    {
      name: 'author',
      id: '9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
    },
    {
      name: 'Misha',
      id: '75f283a2-3cac-4f05-80db-f4c0ff86d5e6',
    },
  ];
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CourseList
          courses={courses}
          authors={authors}
          displayFilteredResults={false}
        />
      </BrowserRouter>
    );
  });

  test('should render two course cards if passed two courses', () => {
    expect(screen.getAllByTestId('course-card')).toHaveLength(2);
  });
});
