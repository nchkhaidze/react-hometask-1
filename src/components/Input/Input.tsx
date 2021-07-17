import React from 'react';
import './Input.css';

interface InputProps {
	placeholder: string;
}

const Input = ({ placeholder }: InputProps) => {
	return <input type='text' placeholder={placeholder} className='input' />;
};

export default Input;
