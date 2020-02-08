import React from 'react';
import '../styles/components/Skills.styl';

const Skills = ({ skills }) => {
  return (
    <div className='Skills'>
      <h3 className='Skills-title'>Skills</h3>
      {
        (skills) ?
          (skills.map(item => (
            <div className='container'>
              <p>{`${item.name}: ${item.percentage} `}</p>
              <progress className='progress' value={parseInt(item.percentage.substring(-1))} max="100"></progress>
            </div>
          ))) : null
      }
    </div>
  );
};

export default Skills;
