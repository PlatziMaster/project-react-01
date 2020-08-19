import React from 'react';
import '../styles/components/Header.styl';

const Header = () => {
  return (
    <div className='Header-container'>
      <img src='https://res.cloudinary.com/djcsouoma/image/upload/w_100/v1597717195/IMG_5496_hgcywh.jpg' alt='profile phot Juan Rios' />
      <section>
        <h1 className='Header-title'>Juan Daniel Rios Ramirez</h1>
        <h3 className='Header-job-title'>MBA and FrontEnd Developer</h3>
        <p className='Header-phone'>Phone +57 3112766237</p>
        <p className='Header-email'>E-mail: mrdaniel19996@gmail.com</p>
        <p className='Header-website'>https://github.com/Mrdaniel01</p>
        <p className='Header-adress'>Bogota - Colombia</p>
      </section>
    </div>
  );
};

export default Header;
