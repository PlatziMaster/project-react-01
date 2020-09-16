import React from 'react';

import '../styles/components/Header.styl';

const Header = ({ avatar, name, profession, email, website }) => (

  <header className='Header'>
    <img src={avatar} alt='Foto de perfil' />
    <div>
      <h1 className='Header-title'>{name}</h1>
      <p>{profession}</p>
      <p>{email}</p>
      <a href={website}>Portafolio</a>
    </div>
  </header>
);

export default Header;
