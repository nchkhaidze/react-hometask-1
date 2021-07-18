import React from 'react';
import Button from '../Button/Button';
import CourseCard from '../CourseCard/CourseCard';
import Search from '../Search/Search';
import './Courses.css';
import { mockedCoursesList, mockedAuthorsList } from '../../constants/mocks';
import { Link } from 'react-router-dom';

const Courses = () => {
  const courseCards = mockedCoursesList.map((course) => {
    const authorNames = course.authors.map((authorId) => {
      const author = mockedAuthorsList.find((author) => author.id === authorId);
      return author?.name ?? '';
    });
    return (
      <div className='courses__item' key={course.id}>
        <CourseCard
          title={course.title}
          duration={course.duration}
          creationDate={course.creationDate}
          description={course.description}
          authorNames={authorNames}
        />
      </div>
    );
  });

  return (
    <div className='courses'>
      <div className='courses__controls'>
        <Search></Search>
        <Link to='/create'>
          <Button text='Add new course' />
        </Link>
      </div>
      <div className='courses__course-list'>{courseCards}</div>
    </div>
  );
};

export default Courses;
