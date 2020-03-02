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
            <p>{`${item.name} - ${item.percentage}`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
