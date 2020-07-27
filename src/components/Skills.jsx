import React from 'react';
import '../styles/components/Skills.styl';
const Skills = ({ Skills = [] }) => (
  <div className="Skills">
    <h2 className="Skills-title">Skills</h2>
    <div className="Skills-container">
      {Skills.map(item => (
        <div className="Skills-item">
          {item.name}
          <div className="Skills-item_container">
            <div className={item.name}>{item.percentage}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
