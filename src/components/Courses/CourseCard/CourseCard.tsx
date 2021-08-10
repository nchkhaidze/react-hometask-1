import dayjs from 'dayjs';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
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
  userIsAdmin: boolean;
}

const CourseCard = ({
  id,
  title,
  duration,
  creationDate,
  description,
  authorNames,
  deleteCourse,
  userIsAdmin,
}: CourseCardProps) => {
  const durationInHours = dayjs.duration(duration, 'minutes').format('H:mm');
  const history = useHistory();
  const buttonSection = userIsAdmin ? (
    <>
      <Link to={`/courses/${id}`}>
        <Button text='Show course' />
      </Link>
      <Button
        text='Delete'
        iconUrl='./deleteIcon.png'
        onClick={() => deleteCourse(id)}
      />
      <Button
        text='Update'
        iconUrl='./editIcon.png'
        onClick={() => history.push(`/courses/update/${id}`)}
      />
    </>
  ) : (
    <Link to={`/courses/${id}`}>
      <Button text='Show course' />
    </Link>
  );

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
        <div className='course-card__button-container'>{buttonSection}</div>
      </div>
    </div>
  );
};

export default CourseCard;
