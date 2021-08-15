import { createSlice } from '@reduxjs/toolkit';
import { Course } from '../../models/Course';
import { removeCourse, fetchCourses, addCourse, updateCourse } from './thunk';

interface CoursesState {
  courses: Course[];
}

const coursesInitialState: CoursesState = {
  courses: [],
};

export const coursesSlice = createSlice({
  name: 'courses',
  initialState: coursesInitialState,
  reducers: {},
  extraReducers: {
    // @ts-ignore
    [fetchCourses.fulfilled]: (state, action) => {
      state.courses = state.courses.concat(action.payload);
    },
    // @ts-ignore
    [addCourse.fulfilled]: (state, action) => {
      if (!Array.isArray(action.payload)) {
        state.courses.push(action.payload);
        return;
      }
      state.courses = state.courses.concat(action.payload);
    },
    // @ts-ignore
    [updateCourse.fulfilled]: (state, action) => {
      const id = action.payload.id;
      state.courses = state.courses.filter((course) => course.id !== id);
      state.courses.push(action.payload);
    },
    // @ts-ignore
    [removeCourse.fulfilled]: (state, action) => {
      const id = action.payload;
      state.courses = state.courses.filter((course) => course.id !== id);
    },
  },
});

export const selectCourses = (state: any) => state.courses.courses;

export default coursesSlice.reducer;
