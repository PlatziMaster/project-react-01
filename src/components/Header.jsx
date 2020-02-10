import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ name, img, children }) => (
  <div className='Header'>
    <div className='Header-container container'>
      <img className='Header-img' src={img} alt='' />
      <div className='Header-info'>
        <h1 className='Header-title'>{name}</h1>
        {children}
      </div>
    </div>
  </div>
);

export default Header;
