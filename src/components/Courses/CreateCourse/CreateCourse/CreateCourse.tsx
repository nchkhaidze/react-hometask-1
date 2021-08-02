import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import CreateCourseParameters from '../CreateCourseParameters/CreateCourseParameters';
import Input from '../../../Input/Input';
import './CreateCourse.css';
import { CourseAuthor } from '../../../../models/Author';
import { nanoid } from 'nanoid';
import dayjs from 'dayjs';
import { useHistory } from 'react-router-dom';
import Button from '../../../Button/Button';

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [courseAuthors, setCourseAuthors] = useState<CourseAuthor[]>([]);
  const [authorName, setAuthorName] = useState('');
  const [duration, setDuration] = useState(60);

  const history = useHistory();

  useEffect(() => {
    axios.get('http://localhost:3000/authors/all').then((response) => {
      setCourseAuthors(response.data.result);
    });
  }, []);

  const createCourse = async () => {
    const courseAuthorIds = courseAuthors
      .filter((author) => author.onCourse)
      .map((author) => author.id);
    if (
      title.length < 2 ||
      description.length < 2 ||
      duration < 1 ||
      courseAuthorIds.length < 1
    ) {
      alert('Please fill in all the fields');
      return;
    }
    await axios.post('http://localhost:3000/courses/add', {
      title,
      description,
      duration,
      authors: courseAuthorIds,
    });
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
      <CreateCourseParameters
        courseAuthors={courseAuthors}
        setCourseAuthors={setCourseAuthors}
        authorName={authorName}
        setAuthorName={setAuthorName}
        duration={duration}
        setDuration={setDuration}
      ></CreateCourseParameters>
    </div>
  );
};

export default CreateCourse;
