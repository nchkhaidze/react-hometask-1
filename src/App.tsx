import React from 'react';
import './App.css';
import Courses from './components/Courses/Courses/Courses';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateCourse from './components/Courses/CreateCourse/CreateCourse/CreateCourse';
import dayjs from 'dayjs';
import * as durationPlugin from 'dayjs/plugin/duration';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CourseInfo from './components/Courses/CourseInfo/CourseInfo';

function App() {
  dayjs.extend(durationPlugin.default);
  return (
    <Router>
      <div className='wrapper'>
        <Switch>
          <Route exact path='/create'>
            <Header></Header>
            <CreateCourse />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/registration'>
            <Registration />
          </Route>
          <Route path='/courses/:courseId'>
            <Header></Header>
            <CourseInfo />
          </Route>
          <Route path='/'>
            <Header></Header>
            <Courses></Courses>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
