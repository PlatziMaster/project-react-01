import React from 'react';
import '../styles/components/About.styl';

const About = ({ title, phone, email, website, address, job }) => {
  return (
    <div className="About">
      <h1 className="About-title">{title}</h1>
      <h2 className="About-job-title">{job}</h2>
      <p className="About-phone">{phone}</p>
      <p className="About-email">{email}</p>
      <p className="About-website">{website}</p>
      <p className="About-address">{address}</p>
    </div>
  )
}

export default About;