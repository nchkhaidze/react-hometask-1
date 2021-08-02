import axios from 'axios';
import React, { SyntheticEvent } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../store/user/reducer';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const jwt = await axios.post('http://localhost:3000/login', {
      email,
      password,
    });
    dispatch(login({ email, name: email, token: jwt.data.result }));
    localStorage.setItem('token', JSON.stringify(jwt.data.result));
    history.push('/');
  };

  return (
    <div className='login'>
      <h2 className='login__title'>Login</h2>
      <form className='login__inputs' onSubmit={handleSubmit}>
        <div className='login__input-container'>
          <Input
            value={email}
            setValue={setEmail}
            placeholder='Enter email'
            label='Email'
          />
        </div>
        <div className='login__input-container'>
          <Input
            value={password}
            setValue={setPassword}
            placeholder='Enter password'
            label='Password'
          />
        </div>
        <div className='login__button-container'>
          <Button type='submit' text='Login' />
        </div>
      </form>
      <p>
        If you do not have an account you can{' '}
        <Link to='/registration'>register</Link>
      </p>
    </div>
  );
};

export default Login;
