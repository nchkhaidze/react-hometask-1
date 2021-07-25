import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './Search.css';

interface SearchProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  onSearch: () => void;
}

const Search = ({ searchValue, setSearchValue, onSearch }: SearchProps) => {
  return (
    <div className='search'>
      <div className='search__input-container'>
        <Input
          placeholder='Enter course name or id...'
          value={searchValue}
          setValue={(value) => setSearchValue(value)}
        />
      </div>
      <div className='search__button-container'>
        <Button text='Search' onClick={onSearch}></Button>
      </div>
    </div>
  );
};

export default Search;
