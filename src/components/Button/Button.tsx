import React from 'react';
import './Button.css';

interface ButtonProps {
	text: string;
	action?: () => void;
}

const Button = ({ text, action }: ButtonProps) => {
	return <button className='button'>{text}</button>;
};

export default Button;
