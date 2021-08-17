import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { userRoleSelector } from '../../store/user/selectors';
import Header from '../Header/Header';

interface PrivateRouteProps {
  component: React.FC;
  path: string;
}

const PrivateRoute = ({ component, path }: PrivateRouteProps) => {
  const userRole = useSelector(userRoleSelector);
  const Component = component;
  const result =
    userRole === 'admin' ? (
      <Route exact path={path}>
        <Header />
        <Component />
      </Route>
    ) : (
      <Redirect to='/courses' />
    );
  return result;
};

export default PrivateRoute;
