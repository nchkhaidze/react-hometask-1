import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Course } from '../../../models/Course';
import './CourseInfo.css';

const CourseInfo = () => {
  let { courseId } = useParams<any>();
  const [course, setCourse] = useState<Course>();
  useEffect(() => {
    axios.get(`http://localhost:3000/courses/${courseId}`).then((result) => {
      setCourse(result.data);
    });
  }, []);

  return (
    <div className='course-info'>
      <div className='course-info__back'>
        <Link to='/courses'>{'< Back to courses'}</Link>
      </div>
      <div className='course-info__header'>
        <h1>{course?.title}</h1>
      </div>
      <div className='course-info__body'>
        <div className='course-info__description'>{course?.description}</div>
        <div className='course-info__details'>
          <div className='course-info__description-item'>
            <b>ID: </b>
            {course?.id}
          </div>
          <div className='course-info__description-item'>
            <b>Duration: </b>
            {course?.duration}
          </div>
          <div className='course-info__description-item'>
            <b>Created: </b>
            {course?.creationDate}
          </div>
          <div className='course-info__description-item'>
            <b>Authors: </b>
            {course?.authors.join(', ')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
