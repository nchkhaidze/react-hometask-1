import React from 'react';
import { useState } from 'react';
import Input from '../../../Input/Input';
import './CourseForm.css';
import { Author } from '../../../../models/Author';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import EditCourseAuthors from '../EditCourseAuthors/EditCourseAuthors';
import { RootState } from '../../../../store';
import { useEffect } from 'react';
import { addCourse, updateCourse } from '../../../../store/courses/thunk';
import { allAuthorsSelector } from '../../../../store/authors/selectors';

interface CourseFormProps {
  editMode: boolean;
}

interface CourseFormRouteParams {
  courseId: string;
}

const CourseForm = ({ editMode }: CourseFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [courseAuthors, setCourseAuthors] = useState<Author[]>([]);
  const [authorName, setAuthorName] = useState('');
  const [duration, setDuration] = useState(60);
  const { courseId } = useParams<CourseFormRouteParams>();

  const dispatch = useDispatch();
  const history = useHistory();

  const allAuthors = useSelector(allAuthorsSelector);
  const currentCourse = useSelector((state: RootState) =>
    state.courses.courses.find((course) => course.id === courseId)
  );

  useEffect(() => {
    if (editMode && currentCourse) {
      setTitle(currentCourse.title);
      setDescription(currentCourse.description);
      setDuration(currentCourse.duration);
      const courseAuthors = currentCourse.authors
        .map((authorId) => {
          return allAuthors.find((author) => author.id === authorId);
        })
        .filter((author) => Boolean(author));
      // @ts-ignore
      setCourseAuthors(courseAuthors ?? []);
    }
  }, [editMode, currentCourse]);

  const createCourse = async (editMode: boolean) => {
    const courseAuthorIds = courseAuthors.map((author) => author.id);
    if (
      title.length < 2 ||
      description.length < 2 ||
      duration < 1 ||
      courseAuthorIds.length < 1
    ) {
      alert('Please fill in all the fields');
      return;
    }
    const newCourse = {
      title,
      description,
      duration,
      authors: courseAuthorIds,
    };
    if (editMode) {
      dispatch(updateCourse({ id: courseId, newCourse }));
    } else {
      dispatch(addCourse({ newCourse }));
    }

    history.push('/courses');
  };

  return (
    <div className='create'>
      <div className='create__controls'>
        <div className='create__title'>
          <div className='create__label'>
            <label>Title</label>
          </div>
          <div className='create__title-input'>
            <Input
              placeholder='Enter title'
              required={true}
              value={title}
              setValue={setTitle}
            />
          </div>
        </div>
        <div className='create__create-button'>
          <Button
            text={editMode ? 'Update course' : 'Create course'}
            onClick={() => createCourse(editMode)}
          />
        </div>
      </div>
      <div className='create__description'>
        <div className='create__label'>
          <label>Description</label>
        </div>
        <div className='create__description-input'>
          <textarea
            className='create__textarea'
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            minLength={2}
            required
          ></textarea>
        </div>
      </div>
      <EditCourseAuthors
        editMode={editMode}
        allAuthors={allAuthors}
        courseAuthors={courseAuthors}
        setCourseAuthors={setCourseAuthors}
        authorName={authorName}
        setAuthorName={setAuthorName}
        duration={duration}
        setDuration={setDuration}
      ></EditCourseAuthors>
    </div>
  );
};

export default CourseForm;
