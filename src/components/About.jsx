import React from 'react';
import '../styles/components/About.styl';

const header = {
  jobTitle: 'Full-Stack developer',
  phone: '+52 55 14 33 66',
  email: 'acortez.dev@gmail.com',
  webSite: 'www.zikeron.com',
  address: 'Presa Santa Teresa 134, Col. Irrigación, 11500',
};

const About = () => {
  return (
    <div className='About'>
      <p className='About-title'>{header.jobTitle}</p>
      <p className='About-item'>{header.phone}</p>
      <p className='About-item'>{header.email}</p>
      <p className='About-item'>{header.webSite}</p>
      <p className='About-item'>{header.address}</p>
    </div>
  );
};

export default About;
