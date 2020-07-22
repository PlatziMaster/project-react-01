import React from 'react';
import '../styles/components/Skills.styl';
const Skills = ({ Skills = [] }) => (
  <div className="Skills-container">
    <h2 className="Skills-title">Skills</h2>
    {Skills.map(item => (
      <div className="Skills_item">
        <p>{item.name}</p>
        <div className={item.name}>
          <div>{item.percentage}</div>
        </div>
      </div>
    ))}
  </div>
);

export default Skills;
