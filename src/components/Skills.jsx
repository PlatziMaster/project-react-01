import React from 'react';
import '../styles/components/Skills.styl';

const Skills = ({ skills }) => {
  const skillsArray = skills || Array(3).fill(1);
  return (
    <div className='Skills section'>
      <h2 className='Skills-title'>Skills</h2>
      {skillsArray.map((item, index) => {
        return (
          <>
            <h4 className='Skills-item' key={index}>{item.name}</h4>
            <p className='Skill-percentage'>{item.percentage}</p>
          </>
        );
      })}
    </div>
  );
};

export default Skills;
