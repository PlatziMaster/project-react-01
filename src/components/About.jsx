import React from 'react';
import iconPhoto from '../assets/IconPhone.svg';
import iconEmail from '../assets/IconEmail.svg';
import iconLocation from '../assets/IconLocation.svg';
import iconWeb from '../assets/IconWeb.svg';

const About = ({title, phone, email, website, address}) => {
  return(
    <>
    <h2 className='About-title'>{title}</h2>
    <div className='About-items'>
      <div className='About-item'>
        <img src={iconPhoto} alt='phone icon' />
        <p>{phone}</p>
      </div>
      <div className='About-item'>
        <img src={iconEmail} alt='email icon' />
        <p>{email}</p>
      </div>
      <div className='About-item'>
        <img src={iconWeb} alt='website icon' />
        <p>{website}</p>
      </div>
      <div className='About-item'>
        <img src={iconLocation} alt='address icon' />
        <p>{address}</p>
      </div>
    </div>
    </>
  )
}

export default About;