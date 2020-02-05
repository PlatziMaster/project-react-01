import React from 'react';
import '../styles/components/About.styl';

const About = () => {
  return (
    <div className='About'>
      <h1 className='Header-title'>
        Rulos
        <span>Codev</span>
      </h1>
      <p className='Header-job-title'>Web Developer</p>

      <p className='Header-phone'>555</p>
      <p className='Header-email'>email</p>
      <p className='Header-website'>website</p>
      <p className='Header-adress'>aderss</p>
    </div>
  );
};

export default About;
