import React from 'react';
import Button from '../Button/Button';
import CourseCard from '../CourseCard/CourseCard';
import Search from '../Search/Search';
import './Courses.css';

const Courses = () => {
	return (
		<div className='courses'>
			<div className='courses__controls'>
				<Search></Search>
				<Button text='Add new course' />
			</div>
			<div className='courses__course-list'>
				<div className='courses__item'>
					<CourseCard />
				</div>
			</div>
		</div>
	);
};

export default Courses;
