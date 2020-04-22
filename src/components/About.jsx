import React from 'react';
import '../styles/components/About.styl';

const About = ({ name, profession, address, email, website, phone }) => {
  return (
    <>
      <div className="About">
        <h1>{name}</h1>
        <p>{profession}</p>
        <p>{website}</p>
        <p>{address}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </>
  );
};

export default About;
