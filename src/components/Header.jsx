import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ children }) => {
  return (
    <div className='Header-container'>
      <div className='Header-img'>
        <img src='https://arepa.s3.amazonaws.com/melissa.jpg' alt='Profile' />
      </div>
      <div className='About-container Header-title'>
        {children}
      </div>
    </div>
  );
};

export default Header;
