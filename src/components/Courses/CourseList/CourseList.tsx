import React from 'react';
import { Author } from '../../../models/Author';
import { Course } from '../../../models/Course';
import CourseCard from '../CourseCard/CourseCard';

interface CourseListProps {
  courses: Course[];
  authors: Author[];
  filterValue: string;
  displayFilteredResults: boolean;
  deleteCourse: (id: string) => void;
  userIsAdmin: boolean;
}

const CourseList = ({
  courses,
  authors,
  filterValue,
  displayFilteredResults,
  deleteCourse,
  userIsAdmin,
}: CourseListProps) => {
  const courseCards = courses?.map((course) => {
    const authorNames = course.authors.map((authorId) => {
      const author = authors.find((author) => author.id === authorId);
      return author?.name ?? '';
    });
    if (displayFilteredResults) {
      if (
        !(
          course.title.toLowerCase().includes(filterValue.toLowerCase()) ||
          course.id.toLowerCase().includes(filterValue.toLowerCase())
        )
      ) {
        return null;
      }
    }
    return (
      <div className='courses__item' key={course.id} data-testid='course-card'>
        <CourseCard
          id={course.id}
          title={course.title}
          duration={course.duration}
          creationDate={course.creationDate}
          description={course.description}
          authorNames={authorNames}
          deleteCourse={deleteCourse}
          userIsAdmin={userIsAdmin}
        />
      </div>
    );
  });
  return (
    <div className='courses__course-list' data-testid='course-list'>
      {courseCards}
    </div>
  );
};

export default CourseList;
