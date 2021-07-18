import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './CreateCourseParameters.css';
import { useState } from 'react';
import { Author } from '../../models/Author';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import axios from 'axios';

interface CourseAuthor extends Author {
  onCourse: boolean;
}

const CreateCourseParameters = () => {
  const [courseAuthors, setCourseAuthors] = useState<CourseAuthor[]>([]);
  const [authorName, setAuthorName] = useState('');
  useEffect(() => {
    axios.get('http://localhost:5000/authors').then((response) => {
      setCourseAuthors(response.data);
    });
  }, []);

  const addCourseAuthor = (author: Author) => {
    const authorToAdd = courseAuthors.find(
      (courseAuthor) => author.id === courseAuthor.id
    );
    if (authorToAdd) {
      authorToAdd.onCourse = true;
      setCourseAuthors([...courseAuthors]);
    }
  };

  const deleteCourseAuthor = (author: Author) => {
    const authorToDelete = courseAuthors.find(
      (courseAuthor) => author.id === courseAuthor.id
    );
    if (authorToDelete) {
      authorToDelete.onCourse = false;
      setCourseAuthors([...courseAuthors]);
    }
  };

  const createAuthor = async (name: string) => {
    const newAuthor: Author = { id: nanoid(), name };
    await axios.post('http://localhost:5000/authors', newAuthor);
    setCourseAuthors([...courseAuthors, newAuthor as CourseAuthor]);
  };

  const allAuthorList = courseAuthors
    .map((author) => {
      if (author.onCourse) {
        return null;
      }
      return (
        <div className='parameters__author-option' key={author.id}>
          <div className='parameters__author-name'>{author.name}</div>
          <Button text='Add author' onClick={() => addCourseAuthor(author)} />
        </div>
      );
    })
    .filter((author) => author !== null);

  const courseAuthorList = courseAuthors
    .map((author) => {
      if (!author.onCourse) {
        return null;
      }
      return (
        <div className='parameters__author-option' key={author.id}>
          <div className='parameters__author-name'>{author.name}</div>
          <Button
            text='Delete author'
            onClick={() => deleteCourseAuthor(author)}
          />
        </div>
      );
    })
    .filter((author) => author !== null);

  return (
    <div className='parameters'>
      <div className='parameters__left-block'>
        <div className='parameters__add-author'>
          <div className='parameters__header'>Add author</div>
          <div className='create__label'>
            <label>Author name</label>
          </div>
          <Input
            placeholder='Enter author name...'
            minlength={2}
            value={authorName}
            setValue={setAuthorName}
          />
          <small className='validation-warning' hidden={authorName.length > 2}>
            Name must be at least 2 chars
          </small>
          <div className='parameters__button-container'>
            <Button
              text='Create author'
              onClick={() => createAuthor(authorName)}
            />
          </div>
        </div>
        <div className='parameters__duration'>
          <div className='parameters__add-duration'>
            <div className='parameters__header'>Duration</div>
            <div className='create__label'>
              <label>Duration</label>
            </div>
            <Input
              placeholder='Enter duration in minutes...'
              value=''
              setValue={() => {}}
            />
            <div className='parameters__total-duration'>
              Duration: <b>00:00</b> hours
            </div>
          </div>
        </div>
      </div>
      <div className='parameters__right-block'>
        <div className='parameters__header'>Authors</div>
        {allAuthorList.length ? allAuthorList : 'Author list is empty'}
        <div className='parameters__header'>Course authors</div>
        {courseAuthorList.length ? courseAuthorList : 'Author list is empty'}
      </div>
    </div>
  );
};

export default CreateCourseParameters;
