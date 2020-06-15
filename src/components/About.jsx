import React from 'react';

const About = ({ phone, email, website, address }) => {
  return (
    <>
      <h3 className='About-title'>Contacto</h3>
      <div className='About-item-container'>
        <a href={`tel:${phone}`} className='About-item Header-phone'>
          {phone}
        </a>
        <a href={`mailto:${email}`} className='About-item Header-email'>
          {email}
        </a>
        <a href={website} className='About-item Header-website'>
          {website}
        </a>
        <a href={`http://maps.google.com/?q=${address}`} className='About-item Header-address'>
          {address}
        </a>
      </div>
    </>
  );
};

export default About;
