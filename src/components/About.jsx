import React from 'react';

const About = ({ phone, email, website, address }) => {
  return (
    <div className='About-color'>
      <h3 className='About-title'>Contacto</h3>
      <div className='About-item-container'>
        <div>
          <a href={`tel:${phone}`} className='About-item Header-phone'>
            {phone}
          </a>
          <a href={`mailto:${email}`} className='About-item Header-email'>
            {email}
          </a>
        </div>

        <div>
          <a href={website} className='About-color About-item Header-website'>
            {website}
          </a>
        </div>

        <div>
          <a href={`http://maps.google.com/?q=${address}`} className='About-item Header-address'>
            {address}
          </a>
        </div>

      </div>
    </div>
  );
};

export default About;
