import React from 'react';
import Skill from './Skill';

import '../styles/components/Skills.styl';

const Skills = ({ skills }) => {
  return (
    <div className='Skills'>
      <h2 className='titleLabel'>Skills</h2>
      {skills && skills.map((skill) => {
        return (
          <Skill {...skill} />
        );
      })}
    </div>
  );
};

export default Skills;
