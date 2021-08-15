import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/index';
import { Provider } from 'react-redux';
import { fetchCourses } from './store/courses/thunk';
import { fetchAuthors } from './store/authors/thunk';

store.dispatch(fetchCourses());
store.dispatch(fetchAuthors());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
