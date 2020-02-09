import React from 'react';
import '../styles/components/About.styl';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/data';

const About = () => {
  const profile = useInitialState(API);
  return (
    <div className="About">
      <h1 className="About-title">{profile.name}</h1>
      <h3 className="About-job-title">{profile.profesion}</h3>
      <p>
        <span className="About-item">{profile.phone}</span>
        <span className="About-item">{profile.email}</span>
        <span className="About-item">{profile.website}</span>
      </p>
      <p>
        <span className="About-item">{profile.address}</span>
      </p>
    </div>
  );
};

export default About;