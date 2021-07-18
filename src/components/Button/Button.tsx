import React, { SyntheticEvent } from 'react';
import './Button.css';

interface ButtonProps {
  text: string;
  onClick?: (value: SyntheticEvent) => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className='button' onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
