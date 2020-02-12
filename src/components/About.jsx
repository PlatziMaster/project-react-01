import React from 'react';

const About = ({ phone, email, website }) => (
  <div className='About'>
    <h3 className='header-phone'>{`Cel: ${phone}`}</h3>
    <a className='head-email' href={`mailto:${email}`}>{`${email} `}</a>
    {/* enviar e-mail a correo especifico */}
    <a className='head-website' href={website}>{website}</a>
  </div>
);

export default About;
