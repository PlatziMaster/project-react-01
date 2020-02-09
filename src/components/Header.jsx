import React from 'react';

const Header = ({ name, profession, phone, email, website, address, children }) => {

  return (
    <div className='Header'>
      <img src='' alt='Solej77' />
      <div className='Header-content'>
        <h1 className='Header-title'>
          {name}
        </h1>
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
      {children}
    </div>
  );
};

export default Header;
