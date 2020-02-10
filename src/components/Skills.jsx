import React from 'react';
import '../styles/components/Skills.styl';
const Skills = ({skills}) => {
  return (
    <div className="Skills card shadow">
      <h1 className="Skills-title">Skills</h1>
      <ul>
        {skills &&
          skills.length > 0 &&
          skills.map((skill, idx) => (
            <li className="Skills-item" key={`skill-${idx}`}>
              <h4>{skill.name}</h4>
              <progress max={100} value={skill.percentage}></progress>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Skills;
