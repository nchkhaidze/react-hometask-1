import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './courses/reducer';
import usersReducer from './user/reducer';
import authorsReducer from './authors/reducer';

const store = configureStore({
  reducer: {
    users: usersReducer,
    courses: coursesReducer,
    authors: authorsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
