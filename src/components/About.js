import React from 'react';
import '../styles/components/About.styl';

const About = () => {
  return (
    <div className='About'>
      <h1 className='About-title'>Raziel</h1>
      <h3 className='About-job-title'>Job Title</h3>
      <p>
        <span className='About-phone About-item'>Phone</span>
        <span className='About-email About-item'>Email</span>
        <span className='About-website About-item'>Website</span>
      </p>
      <p className='About-address'>
        Address
      </p>
    </div>
  );
};

export default About;
