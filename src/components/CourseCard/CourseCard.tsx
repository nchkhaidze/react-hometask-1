import React from 'react';
import Button from '../Button/Button';
import './CourseCard.css';

const CourseCard = () => {
	return (
		<div className='course-card'>
			<div className='course-card__left-block'>
				<div className='course-card__title'>
					<h3>sdfsdfdsf</h3>
				</div>
				<div className='course-card__description'>dfsdfsdf</div>
			</div>
			<div className='course-card__right-block'>
				<div className='course-card__authors course-card__description-item'>
					<b>Authors:</b>
				</div>
				<div className='course-card__duration course-card__description-item'>
					<b>Duration:</b>
				</div>
				<div className='course-card__created course-card__description-item'>
					<b>Created:</b>
				</div>
				<div className='course-card__button-container'>
					<Button text='Show course' />
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
