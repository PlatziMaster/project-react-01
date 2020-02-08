import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ children, name, avatar }) => {
  return (
    <div className='Header'>
      <div className='Header__img'>
        <picture>
          <img src={avatar} alt='profile' />
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
