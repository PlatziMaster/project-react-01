import React from 'react';
import '../styles/components/About.styl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope, faMapMarkerAlt, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

const About = (props) => {
  console.log(props);
  const {
    name = 'Arantxa Giovanna Rosas del Valle',
    profession = 'Full Stack Developer',
    phone = '55 6358 4267',
    email = 'ary.rosvall@gmail.com',
    website = 'aryrosvall.com',
    address = 'Ciudad de México',
  } = props;

  return (
    <section className='About '>
      <h1 className='About__title'>
        {name}
      </h1>
      <p className='About__job-title Subtitle'>{profession}</p>
      <section className='About__contact'>
        <p className='About__contact-item About__phone'>
          <FontAwesomeIcon icon={faMobileAlt} />
          {' '}
          {phone}
        </p>
        <p className='About__contact-item About__email'>
          <FontAwesomeIcon icon={faEnvelope} />
          {' '}
          {email}
        </p>
        <p className='About__contact-item About__website'>
          <FontAwesomeIcon icon={faGlobeAmericas} />
          {' '}
          {website}
        </p>
        <p className='About__contact-item About__address'>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          {' '}
          {address}
        </p>
      </section>
    </section>
  );
};

export default About;
