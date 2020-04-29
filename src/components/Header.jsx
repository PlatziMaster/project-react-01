import React from 'react';
import '../styles/components/Header.styl';

const Header = (props) => {
  const { avatar = 'https://github.com/crizy182/CV/blob/master/static/img/cover.jpg' } = props;
  return (
    <header className='Header'>
      <picture className='header__avatar'>
        <img src={avatar} alt='' />
      </picture>
      <div className='Header__container'>
        <title className='Header__title'>{}</title>
      </div>
    </header>
  );
};

export default Header;
