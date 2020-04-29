import React from 'react';
import '../styles/components/About.styl';

const About = ({ about }) => {
  return (
    <>
      <div className="about">
        <h1>{about.name}</h1>
        <p>{about.phone}</p>
        <p>{about.address}</p>
        <p>{about.email}</p>
        <a href={about.website} target="_blank">Website (@mosqueradvd)</a>
        <p>{about.phone}</p>
      </div>
    </>
  );
};

export default About;
