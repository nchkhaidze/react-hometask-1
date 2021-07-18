import dayjs from 'dayjs';
import React from 'react';
import Button from '../Button/Button';
import './CourseCard.css';

interface CourseCardProps {
  title: string;
  duration: number;
  creationDate: string;
  description: string;
  authorNames: string[];
}

const CourseCard = ({
  title,
  duration,
  creationDate,
  description,
  authorNames,
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
          <Button text='Show course' />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
