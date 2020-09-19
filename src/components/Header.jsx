import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ avatar, name, children }) => {
  return (
    <header className='Header'>
      <img src={avatar} alt={name} className='image' />
      <section className='Header-title' >
        {children}
      </section>
    </header>
  )
}

export default Header
