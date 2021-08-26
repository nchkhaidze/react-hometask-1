import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/index';
import { fetchCourses } from './store/courses/thunk';
import { fetchAuthors } from './store/authors/thunk';

store.dispatch(fetchCourses());
store.dispatch(fetchAuthors());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
