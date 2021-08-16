import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../store/user/thunk';
import { RootState } from '../../store';

const Header = () => {
  const dispatch = useDispatch();
  const currentUserName = useSelector((state: RootState) => state.users.name);
  const handleLogout = () => {
    dispatch(userLogout());
  };

  return (
    <div className='header'>
      <div className='header__logo-container'>
        <Link to='/'>
          <img src='/logo.jpg' alt='Site logo' className='header__logo' />
        </Link>
      </div>
      <div className='header__content'>
        <div className='header__username'>{currentUserName || 'Guest'}</div>
        <div className='header__logout'>
          <Link to='/login'>
            <Button text='Logout' onClick={() => handleLogout()} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
