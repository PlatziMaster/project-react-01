import React from 'react';
import '../styles/components/About.styl';

const About = ({ name, job, phone, email, website, address }) => {
  return (
    <div className='About'>
      <h1 className='About-title'>{ name }</h1>
      <h3 className='About-job-title'>
        { job }
        {' '}
      </h3>
      <p>
        <span className='About-phone About-item'>{ name }</span>
        <span className='About-email About-item'>{ email }</span>
        <span className='About-website About-item'>{ website }</span>
      </p>
      <p className='About-address'>{ address }</p>
    </div>
  );
};

export default About;
