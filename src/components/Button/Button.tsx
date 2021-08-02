import React, { SyntheticEvent } from 'react';
import './Button.css';

interface ButtonProps {
  text: string;
  onClick?: (value: SyntheticEvent) => void;
  type?: 'button' | 'reset' | 'submit';
}

const Button = ({ text, onClick, type }: ButtonProps) => {
  return (
    <button type={type ?? 'button'} className='button' onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
