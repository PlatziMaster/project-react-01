import React from 'react';

const Header = ({ name, avatar, address, children }) => (
  <header className='header'>
    <img className='header-img' src={avatar} alt='avatar' />
    <div>
      <h1 className='header-title'>{name}</h1>
      {children}
      <h3 className='head-adress'>{address}</h3>
    </div>
  </header>
);

export default Header;
