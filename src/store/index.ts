import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './courses/reducer';
import usersReducer from './user/reducer';
import authorsReducer from './authors/reducer';

export default configureStore({
  reducer: {
    users: usersReducer,
    courses: coursesReducer,
    authors: authorsReducer,
  },
});
