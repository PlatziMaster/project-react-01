import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope, faMapMarkerAlt, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

const About = (props) => {
  const {
    name = 'Gabriel Ernesto Zárate Tovar',
    profession = 'Full Stack Develop',
    phone = '55-5685-1823',
    email = 'gzaratet@gmail.com',
    website = 'gzaratet.com',
    address = 'México,CDMX',
  } = props;
  return (
    <div className='About'>
      <h2 className='About-title'>{name}</h2>
      <h3>{profession}</h3>
      <div className='About-contact'>
        <p className='About-item'>
          <FontAwesomeIcon icon={faMobileAlt} />
          {' '}
          {phone}
        </p>
        <p className='About-item'>
          <FontAwesomeIcon icon={faEnvelope} />
          {' '}
          {email}
        </p>
        <p className='About-item'>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          {' '}
          {website}
        </p>
        <p>
          <FontAwesomeIcon icon={faGlobeAmericas} />
          {' '}
          {address}
        </p>
      </div>
    </div>
  );
};

export default About;
