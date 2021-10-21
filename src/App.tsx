import React from 'react';
import './App.css';
import Courses from './components/Courses/Courses/Courses';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import CourseForm from './components/Courses/CreateCourse/CourseForm/CourseForm';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CourseInfo from './components/Courses/CourseInfo/CourseInfo';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='wrapper'>
          <Switch>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/registration'>
              <Registration />
            </Route>
            <Route exact path='/courses'>
              <Header></Header>
              <Courses></Courses>
            </Route>
            <PrivateRoute
              component={() => CourseForm({ editMode: false })}
              path='/courses/add'
            />
            <Route exact path='/courses/:courseId'>
              <Header></Header>
              <CourseInfo />
            </Route>
            <PrivateRoute
              component={() => CourseForm({ editMode: true })}
              path='/courses/update/:courseId'
            />
            <Route path='/'>
              <Redirect to='/courses' />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
