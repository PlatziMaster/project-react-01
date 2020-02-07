import React from 'react';
import '../styles/components/About.styl';

const header = {
  jobTitle: 'Full-Stack developer',
  phone: '+52 55 14 33 66',
  email: 'acortez.dev@gmail.com',
  webSite: 'www.zikeron.com',
  address: 'Presa Santa Teresa 134, Col. Irrigación, 11500',
};

const About = (props) => {
  const {
    profession,
    address,
    email,
    website,
    phone,
  } = props;
  return (
    <div className='About'>
      <p className='About-title'>{profession}</p>
      <p className='About-item'>{phone}</p>
      <p className='About-item'>{email}</p>
      <p className='About-item'>{website}</p>
      <p className='About-item'>{address}</p>
    </div>
  );
};

export default About;
