import React from 'react';
import '../styles/components/Experience.styl';

const Experience = ({ children }) => (
  <div className="Experience">
    <h2 className="Experience-title">Experience</h2>
    {children}
    <span className="Experience-item"></span>
    <span className="Experience-item"></span>
    <span className="Experience-item"></span>
  </div>
);

export default Experience;
