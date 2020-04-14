import React from 'react';

const About = ({title, phone, email, website, address}) => {
  return(
    <>
    <h2 className='About-title'>{title}</h2>
    <div className='About-items'>
      <p className='About-item'>{phone}</p>
      <p className='About-item'>{email}</p>
      <p className='About-item'>{website}</p>
      <p className='About-item'>{address}</p>
    </div>
    </>
  )
}

export default About;