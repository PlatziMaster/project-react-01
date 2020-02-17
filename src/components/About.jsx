import React from 'react';
import '../styles/components/About.css';

const About = ({ phone, website, email, address }) => (
  <div className='About-title'>
    <div className='About-item'>
      <img src='' alt='' />
      <h4>{phone}</h4>
    </div>
    <div className='About-item'>
      <img src='' alt='' />
      <h4>{email}</h4>
    </div>
    <div className='About-item'>
      <img src='' alt='' />
      <h4>{website}</h4>
    </div>
    <div className='About-item'>
      <img src='' alt='' />
      <h4>{address}</h4>
    </div>
  </div>
);

export default About;
