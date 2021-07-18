import React from 'react';
import Button from '../Button/Button';
import CreateCourseParameters from '../CreateCourseParameters/CreateCourseParameters';
import Input from '../Input/Input';
import './CreateCourse.css';

const CreateCourse = () => {
  return (
    <div className='create'>
      <div className='create__controls'>
        <div className='create__title'>
          <div className='create__label'>
            <label>Title</label>
          </div>
          <div className='create__title-input'>
            <Input placeholder='Enter title' />
          </div>
        </div>
        <div className='create__create-button'>
          <Button text='Create course' />
        </div>
      </div>
      <div className='create__description'>
        <div className='create__label'>
          <label>Description</label>
        </div>
        <div className='create__description-input'>
          <textarea className='create__textarea'></textarea>
        </div>
      </div>
      <CreateCourseParameters></CreateCourseParameters>
    </div>
  );
};

export default CreateCourse;
