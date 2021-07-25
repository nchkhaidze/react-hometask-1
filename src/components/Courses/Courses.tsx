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
import CourseList from '../CourseList/CourseList';

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [displayFilteredResults, setDisplayFilteredResults] = useState(false);
  useEffect(() => {
    const coursesRequest = axios.get('http://localhost:5000/courses');
    const authorsRequest = axios.get('http://localhost:5000/authors');
    axios.all([coursesRequest, authorsRequest]).then(
      axios.spread((...responses) => {
        setCourses(responses[0].data);
        setAuthors(responses[1].data);
      })
    );
  }, []);

  useEffect(() => {
    if (!searchValue) {
      setDisplayFilteredResults(false);
    }
  }, [searchValue]);

  const searchCourses = () => {
    setDisplayFilteredResults(true);
  };

  return (
    <div className='courses'>
      <div className='courses__controls'>
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onSearch={searchCourses}
        ></Search>
        <Link to='/create'>
          <Button text='Add new course' />
        </Link>
      </div>
      <CourseList
        courses={courses}
        authors={authors}
        filterValue={searchValue}
        displayFilteredResults={displayFilteredResults}
      />
    </div>
  );
};

export default Courses;
