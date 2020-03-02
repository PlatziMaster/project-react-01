import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ children, avatar }) => {
  return (
    <div className='Header-container'>
      <div className='Header-img'>
        <img src={avatar} alt='Profile' />
      </div>
      <div className='About-container Header-title'>
        {children}
      </div>
    </div>
  );
};

export default Header;
