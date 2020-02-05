import React from 'react';
import About from './About';
import '../styles/components/Header.styl';

const Header = (props) => {

  const { avatar = 'https://arepa.s3.amazonaws.com/melissa.jpg' } = props;

  return (
    <header className='Header'>
      <img src={avatar} alt='' className='Header__profile-photo' />
      <About />
    </header>
  );
};

export default Header;
