import React from 'react';
import '../styles/components/Skills.css';

const Skills = (props) => {
  const skills = Object.values(props);
  return (
    <div className='Skills'>
      <h2 className='Skills-title'>Skills</h2>
      {skills.map(item => (
        <div className='Skills-item'>
          <h3>{item.name}</h3>
          <p>{item.percentage}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
