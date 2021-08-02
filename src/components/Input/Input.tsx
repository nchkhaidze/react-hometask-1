import React from 'react';
import './Input.css';

interface InputProps {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  minlength?: number;
  required?: boolean;
  label?: string;
}

const Input = ({
  placeholder,
  minlength,
  required,
  value,
  setValue,
  label,
}: InputProps) => {
  return (
    <>
      <div className='input__label-container'>
        <label>{label ?? ''}</label>
      </div>
      <input
        type='text'
        placeholder={placeholder}
        className='input'
        minLength={minlength ?? 0}
        required={required ?? false}
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
    </>
  );
};

export default Input;
