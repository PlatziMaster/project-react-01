import React from 'react';
import '../styles/components/App.styl';

const About = (props) => {

  const {
    name = 'Arantxa',
    profession = 'Developer',
    phone = '55 6358 4267',
    email = 'ary.rosvall@gmail.com',
    website = 'aryrosvall.com',
    address = 'Ciudad de México',
  } = props;

  return (
    <section className='About'>
      <h1 className='About__title'>
        {name}
      </h1>
      <p className='About__job-title'>{profession}</p>
      <p className='About__phone'>{phone}</p>
      <p className='About__email'>{email}</p>
      <p className='About__website'>{website}</p>
      <p className='About__address'>{address}</p>
    </section>
  );
};

export default About;
