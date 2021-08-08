import Button from '../../Button/Button';
import Search from '../../Search/Search';
import './Courses.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Course } from '../../../models/Course';
import { useEffect } from 'react';
import { Author } from '../../../models/Author';
import CourseList from '../CourseList/CourseList';
import { useDispatch, useSelector } from 'react-redux';
import { removeCourse } from '../../../store/courses/reducer';
import { RootState } from '../../../store';

const Courses = () => {
  const [searchValue, setSearchValue] = useState('');
  const [displayFilteredResults, setDisplayFilteredResults] = useState(false);
  const dispatch = useDispatch();
  const courses = useSelector((state: RootState) => state.courses.courses);
  const authors = useSelector((state: RootState) => state.authors.authors);

  useEffect(() => {
    if (!searchValue) {
      setDisplayFilteredResults(false);
    }
  }, [searchValue]);

  const deleteCourse = (id: string) => {
    dispatch(removeCourse(id));
  };

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
        <Link to='/courses/add'>
          <Button text='Add new course' />
        </Link>
      </div>
      <CourseList
        deleteCourse={deleteCourse}
        courses={courses}
        authors={authors}
        filterValue={searchValue}
        displayFilteredResults={displayFilteredResults}
      />
    </div>
  );
};

export default Courses;
