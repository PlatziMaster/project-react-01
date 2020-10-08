import React from 'react';
import '../../styles/components/Header.css';

const Header = ({ name, profession, website, address, email, phone }) => {
  return (
    <div className='Header__container'>
      <img className='Header__img' src='../../images/juan.jpg' alt='Profile-Juan-Herrera' width='150px' height='150px' />
      <section>
        <h1 className='Header__title'>{name}</h1>
        <h3 className='Header__job-title'>{profession}</h3>
        <p className='Header__phone'>{phone}</p>
        <p className='Header__email'>{email}</p>
        <p className='Header__adress'>{address}</p>
        <p className='Header__website'>{website}</p>
      </section>
    </div>
  );
};

export default Header;
