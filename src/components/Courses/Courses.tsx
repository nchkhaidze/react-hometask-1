import React from 'react';
import Button from '../Button/Button';
import Search from '../Search/Search';
import './Courses.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Course } from '../../models/Course';
import { useEffect } from 'react';
import axios from 'axios';
import { Author } from '../../models/Author';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  useEffect(() => {
    const coursesRequest = axios.get('http://localhost:5000/courses');
    const authorsRequest = axios.get('http://localhost:5000/authors');
    axios.all([coursesRequest, authorsRequest]).then(
      axios.spread((...responses) => {
        console.log(responses[0], responses[1]);
        setCourses(responses[0].data);
        setAuthors(responses[1].data);
      })
    );
  }, []);
  const courseCards = courses.map((course) => {
    const authorNames = course.authors.map((authorId) => {
      const author = authors.find((author) => author.id === authorId);
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
