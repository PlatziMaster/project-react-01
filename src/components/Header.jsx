import React from 'react';

const Header = ({ children, name, profession, avatar }) => (
  <header className='About'>
    <figure className='About__image'>
      <img src={avatar} alt='Avatar' />
    </figure>
    <div className='Header-title'>
      <h1>{name}</h1>
      <h3>{profession}</h3>
      {children}
    </div>
  </header>
);
export default Header;
