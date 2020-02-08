import React from 'react';

const About = ({ phone, email, website, address }) => {
  return (
    <article>
      <h3 className='About-title'>Contacto</h3>
      <div className='About-item-container'>
        <a href={`tel:${phone}`} className='About-item Header-phone'>
          {phone}
        </a>
        <a href={`mailto:${email}`} target='_blank' rel='noopener noreferrer' className='About-item Header-email'>
          {email}
        </a>
        <a href={website} target='_blank' rel='noopener noreferrer' className='About-item Header-website'>
          {website}
        </a>
        <a href={`http://maps.google.com/?q=${address}`} target='_blank' rel='noopener noreferrer' className='About-item Header-address'>
          {address}
        </a>
      </div>
    </article>
  );
};

export default About;
