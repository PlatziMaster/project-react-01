import React from 'react';
import '../styles/components/About.styl';
const About = ({ about_phone, about_email, about_website, about_address }) => (
  <div className="About-container">
    <h3 className="About-title">About</h3>
    <ul>
      <li className="About-item">{about_email}</li>
      <li className="About-item">{about_phone}</li>
      <li className="About-item">{about_website}</li>
      <li className="About-item">{about_address}</li>
    </ul>
  </div>
);

export default About;
