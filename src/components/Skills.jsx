import React from 'react';
import '../styles/components/Skills.styl';

const Skills = ({ skills }) => {
  const items = skills || Array(3).fill(1);
  return (
    <div className='Skills-container'>
      <div className='Skills-title'>
        <h1>Skills</h1>
      </div>
      {items.map((item, index) => {
        const i = index + 1;
        return (
          <div className='Skills-item' key={i}>
            <span>{item.name}</span>
            <span>____________</span>
            <span>{item.percentage}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
