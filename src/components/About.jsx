import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';

const About = ({ profession, phone, email, website, address }) => {
  return (
    <div className="About">
      <h2 className="About-title">{profession}</h2>
      <ul>
        <li className="About-item">
          <FontAwesomeIcon icon={faPhone} />
          {phone}
        </li>
        <li className="About-item">
          <FontAwesomeIcon icon={faEnvelope} />
          {email}
        </li>
        <li className="About-item">
          <FontAwesomeIcon icon={faGlobe} />
          {website}
        </li>
      </ul>

      <p>{address}</p>
    </div>
  );
};

export default About;
