import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ children, img }) => {
  return (
    <div className='Header'>
      <h1 className='Header-title'>Header title</h1>
      <img
        className='Header-avatar'
        alt='header-avatar'
        src={img}
      />
      { children }
    </div>
  );
};

export default Header;
