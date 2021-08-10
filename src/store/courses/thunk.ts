import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CourseDTO } from '../../models/Course';
import { ApiService } from '../../services/apiService';

const apiService = new ApiService();

interface addCourseParams {
  newCourse: CourseDTO;
}

interface updateCourseParams {
  id: string;
  newCourse: CourseDTO;
}

export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async () => {
    const response = await axios.get('http://localhost:3000/courses/all');
    return response.data.result;
  }
);

export const updateCourse = createAsyncThunk(
  'courses/updateCourse',
  async ({ id, newCourse }: updateCourseParams) => {
    const response = await apiService.updateCourse(id, newCourse);
    return response.data.result;
  }
);

export const addCourse = createAsyncThunk(
  'courses/addCourse',
  async ({ newCourse }: addCourseParams) => {
    const response = await apiService.addCourse(newCourse);
    return response.data.result;
  }
);

export const removeCourse = createAsyncThunk(
  'courses/removeCourse',
  async (id: string) => {
    await apiService.removeCourse(id);
    return id;
  }
);
