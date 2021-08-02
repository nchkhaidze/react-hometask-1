import axios from 'axios';
import React, { SyntheticEvent } from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import '../Login/Login.css';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    await axios.post('http://localhost:3000/register', {
      name,
      email,
      password,
    });
    history.push('/login');
  };

  return (
    <div className='login'>
      <h2 className='login__title'>Login</h2>
      <form className='login__inputs' onSubmit={handleSubmit}>
        <div className='login__input-container'>
          <Input
            value={name}
            setValue={setName}
            placeholder='Enter name'
            label='Name'
          />
        </div>
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
          <Button type='submit' text='Registration' />
        </div>
      </form>
      <p>
        If you have an account you can <Link to='/login'>login</Link>
      </p>
    </div>
  );
};

export default Registration;
