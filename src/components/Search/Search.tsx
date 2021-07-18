import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './Search.css';

const Search = () => {
  return (
    <div className='search'>
      <div className='search__input-container'>
        <Input
          placeholder='Enter course name or id...'
          value=''
          setValue={() => {}}
        />
      </div>
      <div className='search__button-container'>
        <Button text='Search'></Button>
      </div>
    </div>
  );
};

export default Search;
