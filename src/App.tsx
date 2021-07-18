import React from 'react';
import './App.css';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateCourse from './components/CreateCourse/CreateCourse';
import dayjs from 'dayjs';
import * as durationPlugin from 'dayjs/plugin/duration';

function App() {
  dayjs.extend(durationPlugin.default);
  return (
    <Router>
      <div className='wrapper'>
        <Header></Header>
        <Switch>
          <Route exact path='/create'>
            <CreateCourse />
          </Route>
          <Route path='/'>
            <Courses></Courses>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
