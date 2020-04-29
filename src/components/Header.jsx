import React from 'react';
import '../styles/components/Header.styl';

const Header = (props) => {
  const { ...avatar } = props;
  return (
    <header className='Header'>
      <picture className='header__avatar'>
        <img src={avatar} alt='' />
      </picture>
      <div className='Header__container'>
        <h1 className='Header__title'>{}</h1>
      </div>
    </header>
  );
};

export default Header;
