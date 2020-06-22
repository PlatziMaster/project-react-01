import React from 'react';
import '../styles/components/Skills.styl';

const Skills = ({ children }) => (
  <div className="Skills">
    <h2 className="Skills-title">Skills</h2>
    {children}
    <span className="Skills-item"></span>
    <span className="Skills-item"></span>
    <span className="Skills-item"></span>
  </div>
);

export default Skills;
