import React, { SyntheticEvent } from 'react';
import './Button.css';

interface ButtonProps {
  text: string;
  onClick?: (value: SyntheticEvent) => void;
  type?: 'button' | 'reset' | 'submit';
  iconUrl?: string;
}

const Button = ({ text, onClick, type, iconUrl }: ButtonProps) => {
  return (
    <button type={type ?? 'button'} className='button' onClick={onClick}>
      {iconUrl ? <img src={iconUrl} alt='icon' width={20} /> : text}
    </button>
  );
};

export default Button;
