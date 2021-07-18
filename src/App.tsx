import React from 'react';
import './App.css';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateCourse from './components/CreateCourse/CreateCourse';

function App() {
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
