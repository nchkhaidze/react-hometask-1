import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './CreateCourseParameters.css';

const CreateCourseParameters = () => {
  return (
    <div className='parameters'>
      <div className='parameters__left-block'>
        <div className='parameters__add-author'>
          <div className='parameters__header'>Add author</div>
          <div className='create__label'>
            <label>Author name</label>
          </div>
          <Input placeholder='Enter author name...' />
          <div className='parameters__button-container'>
            <Button text='Create author' />
          </div>
        </div>
        <div className='parameters__duration'>
          <div className='parameters__add-duration'>
            <div className='parameters__header'>Duration</div>
            <div className='create__label'>
              <label>Duration</label>
            </div>
            <Input placeholder='Enter duration in minutes...' />
            <div className='parameters__total-duration'>
              Duration: <b>00:00</b> hours
            </div>
          </div>
        </div>
      </div>
      <div className='parameters__right-block'>
        <div className='parameters__header'>Authors</div>
        <div className='parameters__author-option'>
          <div className='parameters__author-name'>Name</div>
          <Button text='Add author' />
        </div>
        <div className='parameters__header'>Course authors</div>
        <div className='parameters__course-author'></div>
      </div>
    </div>
  );
};

export default CreateCourseParameters;
