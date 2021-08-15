import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAuthors = createAsyncThunk(
  'authors/fetchAuthors',
  async () => {
    const response = await axios.get('http://localhost:3000/authors/all');
    return response.data.result;
  }
);
