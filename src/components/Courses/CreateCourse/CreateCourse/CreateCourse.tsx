import React from 'react';
import { useState } from 'react';
import Input from '../../../Input/Input';
import './CreateCourse.css';
import { Author } from '../../../../models/Author';
import { useHistory } from 'react-router-dom';
import Button from '../../../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addCourses } from '../../../../store/courses/reducer';
import { ApiService } from '../../../../services/apiService';
import EditCourseAuthors from '../CreateCourseParameters/EditCourseAuthors';
import { RootState } from '../../../../store';

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [courseAuthors, setCourseAuthors] = useState<Author[]>([]);
  const [authorName, setAuthorName] = useState('');
  const [duration, setDuration] = useState(60);

  const dispatch = useDispatch();
  const history = useHistory();
  const allAuthors = useSelector((state: RootState) => state.authors.authors);

  const apiService = new ApiService();

  const createCourse = async () => {
    const courseAuthorIds = courseAuthors.map((author) => author.id);
    if (
      title.length < 2 ||
      description.length < 2 ||
      duration < 1 ||
      courseAuthorIds.length < 1
    ) {
      alert('Please fill in all the fields');
      return;
    }
    const newCourse = {
      title,
      description,
      duration,
      authors: courseAuthorIds,
    };
    const course = await apiService.addCourse(newCourse);
    dispatch(addCourses(course.data.result));
    history.push('/courses');
  };

  return (
    <div className='create'>
      <div className='create__controls'>
        <div className='create__title'>
          <div className='create__label'>
            <label>Title</label>
          </div>
          <div className='create__title-input'>
            <Input
              placeholder='Enter title'
              required={true}
              value={title}
              setValue={setTitle}
            />
          </div>
        </div>
        <div className='create__create-button'>
          <Button text='Create course' onClick={createCourse} />
        </div>
      </div>
      <div className='create__description'>
        <div className='create__label'>
          <label>Description</label>
        </div>
        <div className='create__description-input'>
          <textarea
            className='create__textarea'
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            minLength={2}
            required
          ></textarea>
        </div>
      </div>
      <EditCourseAuthors
        allAuthors={allAuthors}
        courseAuthors={courseAuthors}
        setCourseAuthors={setCourseAuthors}
        authorName={authorName}
        setAuthorName={setAuthorName}
        duration={duration}
        setDuration={setDuration}
      ></EditCourseAuthors>
    </div>
  );
};

export default CreateCourse;
