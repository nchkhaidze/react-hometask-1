import { createSlice } from '@reduxjs/toolkit';
import { Author } from '../../models/Author';
import { fetchAuthors } from './thunk';

interface AuthorsState {
  authors: Author[];
}

const authorsInitialState: AuthorsState = {
  authors: [],
};

export const authorsSlice = createSlice({
  name: 'authors',
  initialState: authorsInitialState,
  reducers: {
    addAuthors: (state, action) => {
      if (!Array.isArray(action.payload)) {
        state.authors.push(action.payload);
        return;
      }
      state.authors = state.authors.concat(action.payload);
    },
    removeAuthor: (state, action) => {
      const id = action.payload;
      state.authors = state.authors.filter((authors) => authors.id !== id);
    },
  },
  extraReducers: {
    // @ts-ignore
    [fetchAuthors.fulfilled]: (state, action) => {
      state.authors = state.authors.concat(action.payload);
    },
  },
});

export const { addAuthors, removeAuthor } = authorsSlice.actions;

export const selectAuthors = (state: any) => state.authors.authors;

export default authorsSlice.reducer;
