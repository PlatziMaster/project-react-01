import React from 'react';
import '../styles/components/Header.styl';
import profile from '../assets/static/profileimg.jpg';

const Header = ({ children, name }) => {
  return (
    <div className='Header'>
      <div className='Header__img'>
        <picture>
          <img src={profile} alt='profile' />
        </picture>
      </div>
      <div className='Header__about'>
        <h1 className='Header-title'>
          {name}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Header;
