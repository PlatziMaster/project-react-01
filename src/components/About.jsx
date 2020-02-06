import React from 'react';
import '../styles/components/About.styl';

const About = (props) => {

  const {
    name = 'Arantxa Rosas',
    profession = 'Full Stack Developer',
    phone = '55 6358 4267',
    email = 'ary.rosvall@gmail.com',
    website = 'aryrosvall.com',
    address = 'Ciudad de México',
  } = props;

  return (
    <section className='About Box'>
      <h1 className='About__title'>
        {name}
      </h1>
      <p className='About__job-title Subtitle'>{profession}</p>
      <section className='About__contact'>
        <p className='About__contact-item About__phone'>
          {phone}
        </p>
        <p className='About__contact-item About__email'>{email}</p>
        <p className='About__contact-item About__website'>{website}</p>
        <p className='About__contact-item About__address'>{address}</p>
      </section>
    </section>
  );
};

export default About;
