import React from 'react';
import '../styles/components/Header.css';

const Header = ({ children }) => {
  return (
    <div className='header__container'>
      <div className='header__container--img'>
        <img src='https://arepa.s3.amazonaws.com/melissa.jpg' alt='Profile' />
      </div>
      <div className='about__container'>
        {children}
      </div>
    </div>
  );
};

export default Header;
