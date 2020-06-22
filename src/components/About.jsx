import React from 'react';
import '../styles/components/About.styl';

const About = ({ profession, phone, email, website, address }) => (
  <div className="About">
    <h3 className="About-title"> {profession} </h3>
    <div className="About-items">
      <span className="About-item">{phone}</span>
      <span className="About-item">{email}</span>
      <span className="About-item">{website}</span>
      <span className="About-item">{address}</span>
    </div>
  </div>
);

export default About;
