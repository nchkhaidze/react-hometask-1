import Button from '../../Button/Button';
import Search from '../../Search/Search';
import './Courses.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import CourseList from '../CourseList/CourseList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { removeCourse } from '../../../store/courses/thunk';

const Courses = () => {
  const [searchValue, setSearchValue] = useState('');
  const [displayFilteredResults, setDisplayFilteredResults] = useState(false);
  const dispatch = useDispatch();
  const courses = useSelector((state: RootState) => state.courses.courses);
  const authors = useSelector((state: RootState) => state.authors.authors);
  const userIsAdmin =
    useSelector((state: RootState) => state.users.role) === 'admin';

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
        <Link to='/courses/add' hidden={!userIsAdmin}>
          <Button text='Add new course' />
        </Link>
      </div>
      <CourseList
        userIsAdmin={userIsAdmin}
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
