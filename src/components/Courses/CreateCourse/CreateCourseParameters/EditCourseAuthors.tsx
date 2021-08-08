import Button from '../../../Button/Button';
import Input from '../../../Input/Input';
import './EditCourseAuthors.css';
import { Author } from '../../../../models/Author';
import CreateCourseDuration from '../CreateCourseDuration/CreateCourseDuration';
import { useDispatch, useSelector } from 'react-redux';
import { addAuthors } from '../../../../store/authors/reducer';
import { ApiService } from '../../../../services/apiService';
import { RootState } from '../../../../store';
import { useState } from 'react';

interface EditCourseAuthorsProps {
  allAuthors: Author[];
  courseAuthors: Author[];
  setCourseAuthors: (authors: Author[]) => void;
  authorName: string;
  setAuthorName: (name: string) => void;
  duration: number;
  setDuration: (duration: number) => void;
}

const EditCourseAuthors = ({
  allAuthors,
  courseAuthors,
  setCourseAuthors,
  authorName,
  setAuthorName,
  duration,
  setDuration,
}: EditCourseAuthorsProps) => {
  const dispatch = useDispatch();
  const apiService = new ApiService();
  const [onCourseMap, setOnCourseMap] = useState(new Map<string, boolean>());

  console.log(courseAuthors);

  const addCourseAuthor = (newAuthor: Author) => {
    setOnCourseMap(onCourseMap.set(newAuthor.id, true));
    setCourseAuthors([...courseAuthors, newAuthor]);
  };

  const deleteCourseAuthor = (deletedAuthor: Author) => {
    setOnCourseMap(onCourseMap.set(deletedAuthor.id, false));
    setCourseAuthors(
      courseAuthors.filter((author) => author.id !== deletedAuthor.id)
    );
  };

  const createAuthor = async (name: string) => {
    if (name.length < 2) {
      return;
    }
    const newAuthor = { name };
    const addedAuthor = await apiService.addAuthor(newAuthor);
    dispatch(addAuthors(addedAuthor.data.result));
  };

  const allAuthorList = allAuthors
    .filter((author) => !onCourseMap.get(author.id))
    .map((author) => {
      return (
        <div className='parameters__author-option' key={author.id}>
          <div className='parameters__author-name'>{author.name}</div>
          <Button text='Add author' onClick={() => addCourseAuthor(author)} />
        </div>
      );
    });

  const courseAuthorList = courseAuthors.map((author) => {
    return (
      <div className='parameters__author-option' key={author.id}>
        <div className='parameters__author-name'>{author.name}</div>
        <Button
          text='Delete author'
          onClick={() => deleteCourseAuthor(author)}
        />
      </div>
    );
  });

  return (
    <div className='parameters'>
      <div className='parameters__left-block'>
        <div className='parameters__add-author'>
          <div className='parameters__header'>Add author</div>
          <div className='create__label'>
            <label>Author name</label>
          </div>
          <Input
            placeholder='Enter author name...'
            minlength={2}
            value={authorName}
            setValue={setAuthorName}
          />
          <small className='validation-warning' hidden={authorName.length >= 2}>
            Name must be at least 2 chars
          </small>
          <div className='parameters__button-container'>
            <Button
              text='Create author'
              onClick={() => createAuthor(authorName)}
            />
          </div>
        </div>
        <CreateCourseDuration duration={duration} setDuration={setDuration} />
      </div>
      <div className='parameters__right-block'>
        <div className='parameters__header'>Authors</div>
        {allAuthorList.length ? allAuthorList : 'Author list is empty'}
        <div className='parameters__header'>Course authors</div>
        {courseAuthorList.length ? courseAuthorList : 'Author list is empty'}
      </div>
    </div>
  );
};

export default EditCourseAuthors;
