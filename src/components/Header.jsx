import React from 'react';
import cover from '../assets/cover.svg';
import marco from '../assets/marco.svg';

const Header = ({ children, title, img }) => {
  return (
    <section className='Header'>
        <img className='Header-banner' src={cover} alt='Banner' />
        <div className='Header-avatar'>
          <img className='Header-avatar-photo' src={img} alt={title} />
          <img className='Header-avatar-marco' src={marco} alt='marco' />
        </div>
        <h1 className='Header-title'>{title}</h1>
      {children}
    </section>
  )
}

export default Header;