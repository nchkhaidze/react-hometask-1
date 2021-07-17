import React from 'react';
import Button from '../Button/Button';
import './Header.css';

const Header = () => {
	return (
		<div className='header'>
			<div className='header__logo-container'>
				<img src='logo.jpg' alt='Site logo' className='header__logo' />
			</div>
			<div className='header__content'>
				<div className='header__username'>Niki</div>
				<div className='header__logout'>
					<Button text='Logout' />
				</div>
			</div>
		</div>
	);
};

export default Header;
