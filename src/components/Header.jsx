import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ name, avatar, profession, phone, email, website, address, children }) => {

  return (
    <div className='Header'>
      <div className='Header-container'>
        <div className='Header-name'>
          <img
            className='Header-avatar'
            src={avatar}
            alt='Solej77'
          />
          <h1 className='Header-title'>
            {name}
          </h1>
        </div>
        <div className='Header-info'>
          <h2>Info</h2>
          <h3 className='Header-job-title'>
            {profession}
          </h3>
          <div className='Header-contact'>
            <h3 className='Header-phone'>
              {phone}
            </h3>
            <h3 className='Header-email'>
              {email}
            </h3>
            <h3 className='Header-website'>
              {website}
            </h3>
          </div>
          <h3 className='Header-adress'>
            {address}
          </h3>
        </div>
        <div className='Header-about'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Header;
