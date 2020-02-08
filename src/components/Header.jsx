import React from 'react';
import '../styles/components/Header.styl';

const Header = (props) => {

  const { avatar = 'https://arepa.s3.amazonaws.com/melissa.jpg' } = props;

  return (
    <header className='Header Box'>
      <img src={avatar} alt='' className='Header-title' />
    </header>
  );
};

export default Header;
