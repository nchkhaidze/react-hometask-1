import dayjs from 'dayjs';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import './CourseCard.css';

interface CourseCardProps {
  id: string;
  title: string;
  duration: number;
  creationDate: string;
  description: string;
  authorNames: string[];
  deleteCourse: (id: string) => void;
}

const CourseCard = ({
  id,
  title,
  duration,
  creationDate,
  description,
  authorNames,
  deleteCourse,
}: CourseCardProps) => {
  const durationInHours = dayjs.duration(duration, 'minutes').format('H:mm');

  return (
    <div className='course-card'>
      <div className='course-card__left-block'>
        <div className='course-card__title'>
          <h3>{title}</h3>
        </div>
        <div className='course-card__description'>{description}</div>
      </div>
      <div className='course-card__right-block'>
        <div className='course-card__authors course-card__description-item'>
          <b>Authors: {authorNames.join(', ')}</b>
        </div>
        <div className='course-card__duration course-card__description-item'>
          <b>Duration: {`${durationInHours} hours`}</b>
        </div>
        <div className='course-card__created course-card__description-item'>
          <b>Created: {creationDate}</b>
        </div>
        <div className='course-card__button-container'>
          <Link to={`/courses/${id}`}>
            <Button text='Show course' />
          </Link>
          <Button
            text='Delete'
            iconUrl='./deleteIcon.png'
            onClick={() => deleteCourse(id)}
          />
          <Button text='Update' iconUrl='./editIcon.png' />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
