import React from 'react';
import '../styles/components/Header.css';
import About from './About';

const Header = ({ name, profession, avatar, phone, website, email, address }) => (
  <div className='Header'>
    <div className='Header-logo'>
      <img className='logo' src={avatar} alt='' />
    </div>
    <div className='Header-title'>
      <div className='Header-title--name'>
        <h1>{name}</h1>
      </div>
      <div className='Header-title--job'>
        <h2>{profession}</h2>
      </div>
      <About
        phone={phone}
        website={website}
        email={email}
        address={address}
      />
    </div>
  </div>
);

export default Header;
