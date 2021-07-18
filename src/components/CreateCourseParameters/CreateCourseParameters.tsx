import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './CreateCourseParameters.css';
import { useState } from 'react';
import { Author, CourseAuthor } from '../../models/Author';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import axios from 'axios';
import CreateCourseDuration from '../CreateCourseDuration/CreateCourseDuration';

interface CreateCourseParametersProps {
  courseAuthors: CourseAuthor[];
  setCourseAuthors: (authors: CourseAuthor[]) => void;
  authorName: string;
  setAuthorName: (name: string) => void;
  duration: number;
  setDuration: (duration: number) => void;
}

const CreateCourseParameters = ({
  courseAuthors,
  setCourseAuthors,
  authorName,
  setAuthorName,
  duration,
  setDuration,
}: CreateCourseParametersProps) => {
  const addCourseAuthor = (author: Author) => {
    const authorToAdd = courseAuthors.find(
      (courseAuthor: CourseAuthor) => author.id === courseAuthor.id
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
    if (name.length < 2) {
      return;
    }
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

  console.log(duration);

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
          <small className='validation-warning' hidden={authorName.length >= 2}>
            Name must be at least 2 chars
          </small>
          <div className='parameters__button-container'>
            <Button
              text='Create author'
              onClick={() => createAuthor(authorName)}
            />
          </div>
        </div>
        <CreateCourseDuration duration={duration} setDuration={setDuration} />
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
