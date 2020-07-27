import React from 'react';
import '../styles/components/About.styl';
import iconEmail from '../assets/static/imail.png';
import iconAddress from '../assets/static/iaddress.png';
import iconPhone from '../assets/static/iphone.png';

const About = ({ about_phone, about_email, about_address }) => (
  <div className="About">
    <p className="About-item">
      <img className="icon" src={iconEmail} /> {about_email}
    </p>
    <p className="About-item">
      <img className="icon" src={iconPhone} /> {about_phone}
    </p>
    <p className="About-item">
      <img className="icon" src={iconAddress} />
      {about_address}
    </p>
  </div>
);

export default About;
