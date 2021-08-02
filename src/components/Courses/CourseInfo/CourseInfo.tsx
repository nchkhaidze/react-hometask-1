import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Author } from '../../../models/Author';
import { Course } from '../../../models/Course';
import './CourseInfo.css';

const CourseInfo = () => {
  let { courseId } = useParams<any>();
  const [course, setCourse] = useState<Course>();
  const [authors, setAuthors] = useState<Author[]>([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/courses/${courseId}`)
      .then((result) => {
        setCourse(result.data.result);
        return axios.all(
          result.data.result.authors.map((authorId: string) =>
            axios.get(`http://localhost:3000/authors/${authorId}`)
          )
        );
      })
      .then(
        axios.spread((...responses) => {
          const authorList = responses.map(
            (response: any) => response.data.result.name
          );
          setAuthors(authorList);
        })
      );
  }, []);

  return (
    <>
      {course ? (
        <div className='course-info'>
          <div className='course-info__back'>
            <Link to='/courses'>{'< Back to courses'}</Link>
          </div>
          <div className='course-info__header'>
            <h1>{course?.title}</h1>
          </div>
          <div className='course-info__body'>
            <div className='course-info__description'>
              {course?.description}
            </div>
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
                {authors.join(', ')}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='course-info'>Loading...</div>
      )}
    </>
  );
};

export default CourseInfo;
