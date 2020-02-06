import React from 'react';
import '../styles/components/Header.styl';
import profile from '../assets/static/profileimg.jpg';

const header = {
  title: 'Alejandro Demetrio Cortez Álvarez',
};

const Header = ({ children }) => {
  return (
    <div className='Header'>
      <div className='Header__img'>
        <picture>
          <img src={profile} alt='profile' />
        </picture>
      </div>
      <div className='Header__about'>
        <h1 className='Header-title'>
          {header.title}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Header;
