import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ApiService } from '../../services/apiService';

const apiService = new ApiService();

export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async () => {
    const response = await axios.get('http://localhost:3000/courses/all');
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
