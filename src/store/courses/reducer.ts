import { createSlice } from '@reduxjs/toolkit';
import { Course } from '../../models/Course';

interface CoursesState {
  courses: Course[];
}

const coursesInitialState: CoursesState = {
  courses: [],
};

export const coursesSlice = createSlice({
  name: 'courses',
  initialState: coursesInitialState,
  reducers: {
    addCourses: (state, action) => {
      if (!Array.isArray(action.payload)) {
        state.courses.push(action.payload);
        return;
      }
      state.courses = state.courses.concat(action.payload);
    },
    updateCourse: (state, action) => {
      const id = action.payload;
      state.courses = state.courses.filter((course) => course.id !== id);
      state.courses.push(action.payload);
    },
    removeCourse: (state, action) => {
      const id = action.payload;
      state.courses = state.courses.filter((course) => course.id !== id);
    },
  },
});

export const { addCourses, updateCourse, removeCourse } = coursesSlice.actions;

export const selectCourses = (state: any) => state.courses.courses;

export default coursesSlice.reducer;
