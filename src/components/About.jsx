import React from 'react';
import '../styles/components/About.styl';

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
