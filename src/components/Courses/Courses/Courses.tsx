import Button from '../../Button/Button';
import Search from '../../Search/Search';
import './Courses.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Course } from '../../../models/Course';
import { useEffect } from 'react';
import axios from 'axios';
import { Author } from '../../../models/Author';
import CourseList from '../CourseList/CourseList';
import { useDispatch } from 'react-redux';
import { addCourses, removeCourse } from '../../../store/courses/reducer';
import { addAuthors } from '../../../store/authors/reducer';

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [displayFilteredResults, setDisplayFilteredResults] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const coursesRequest = axios.get('http://localhost:3000/courses/all');
    const authorsRequest = axios.get('http://localhost:3000/authors/all');

    axios.all([coursesRequest, authorsRequest]).then(
      axios.spread((...responses) => {
        const courses: Course[] = responses[0].data.result;
        const authors: Author[] = responses[1].data.result;
        setCourses(courses);
        setAuthors(authors);
        dispatch(addAuthors(authors));
        dispatch(addCourses(courses));
      })
    );
  }, []);

  useEffect(() => {
    if (!searchValue) {
      setDisplayFilteredResults(false);
    }
  }, [searchValue]);

  const deleteCourse = (id: string) => {
    dispatch(removeCourse(id));
    setCourses(courses.filter((course) => course.id !== id));
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
