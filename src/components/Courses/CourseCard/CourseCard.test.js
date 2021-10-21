import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CourseCard from './CourseCard';
import { BrowserRouter } from 'react-router-dom';
import { pipeDuration } from '../../../helpers/pipeDuration';

describe('CourseCard', () => {
  const id = 1;
  const title = 'title';
  const duration = 60;
  const creationDate = '10/08/2021';
  const description = 'asd';
  const authorNames = ['Bob', 'Jim'];

  beforeEach(() => {
    render(
      <BrowserRouter>
        <CourseCard
          id={id}
          title={title}
          duration={duration}
          creationDate={creationDate}
          description={description}
          userIsAdmin={true}
          deleteCourse={() => {}}
          authorNames={authorNames}
        />
      </BrowserRouter>
    );
  });

  test('displays title', () => {
    expect(screen.getByRole('heading')).toHaveTextContent(title);
  });

  test('displays description', () => {
    expect(screen.getByTestId('description')).toHaveTextContent(description);
  });

  test('displays piped duration', () => {
    expect(screen.getByTestId('duration')).toHaveTextContent(
      pipeDuration(duration)
    );
  });

  test('displays authors list', () => {
    expect(screen.getByTestId('authorNames')).toHaveTextContent(
      authorNames.join(', ')
    );
  });

  test('displays created date', () => {
    expect(screen.getByTestId('createdDate')).toHaveTextContent(creationDate);
  });
});
