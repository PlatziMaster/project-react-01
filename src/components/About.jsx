import React from 'react';
import '../styles/components/About.styl';

const About = ({ name, job, phone, email, website, address, picture }) => {
  return (
    <section className='Header section'>
      <div className='Header-img'>
        <img src={picture} alt='imagen mia' />
      </div>
      <h3 className='About-title'> My Data </h3>
      <div className='Header-desc'>
        <h1 className='Header-title About-item'>{name}</h1>
        <p className='Header-job-title About-item'>{job}</p>
        <span className='Header-phone About-item'>{phone}</span>
        <span className='Header-email About-item'>{email}</span>
        <span className='Header-website About-item'>{website}</span>
        <p className='Header-address About-item'>{address}</p>
      </div>
    </section>
  );
};

export default About;
