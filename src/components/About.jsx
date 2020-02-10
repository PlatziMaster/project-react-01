import React from 'react';
import '../styles/components/About.styl';

const About = ({ profession, phone, email, website, address }) => (
  <div className='About'>
    <div className='About-container container'>
      <h2 className='About-item About-title'>{profession}</h2>
      <div className='About-item'>
        <span className='About-item__text'>{phone}</span>
        <span className='About-item__text'>{email}</span>
        <span className='About-item__text'>{website}</span>
      </div>
      <div className='About-item'>
        <p className='About-item__adress'>{address}</p>
      </div>
    </div>
  </div>
);

export default About;
