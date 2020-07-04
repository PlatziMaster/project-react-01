import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope, faGlobeAmericas, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

import '../styles/components/About.styl';

const icons = {
  mobileIcon: faMobileAlt,
  emailIcon: faEnvelope,
  websiteIcon: faGlobeAmericas,
  addressIcon: faLocationArrow,
}

const About = ({ name, jobTitle, phoneNumber, email, website, address }) => (
  <div className='Header__contents'>
    <h1 className='Header-title'>{name}</h1>
    <h2 className='Header-job-title'>{jobTitle}</h2>
    <div className='Header-paragraphs'>
      <p>
        <FontAwesomeIcon icon={icons.mobileIcon} />
        <a href={`tel:${phoneNumber}`}>
          {phoneNumber}
        </a>
      </p>
      <p>
        <FontAwesomeIcon icon={icons.emailIcon} />
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p>
        <FontAwesomeIcon icon={icons.websiteIcon} />
        <a href={website} target='_blank'>
          {website}
        </a>
      </p>
    </div>
    <div className='Header-paragraphs'>
      <p>
        <FontAwesomeIcon icon={icons.addressIcon} /> {address}
      </p>
    </div>
  </div>
)

export default About;
