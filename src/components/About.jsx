import React from 'react';
import '../styles/components/About.styl';
const About = ({ about_phone, about_email, about_website, about_address }) => (
  <div className="About">
    <p className="About-item">
      <strong>E-mail:</strong> {about_email}
    </p>
    <p className="About-item">
      <strong>Tel:</strong> {about_phone}
    </p>
    <p className="About-item">
      <strong>Website:</strong> {about_website}
    </p>
    <p className="About-item">
      <strong>Address:</strong> {about_address}
    </p>
  </div>
);

export default About;
