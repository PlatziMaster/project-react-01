import React from 'react';
import SkillItem from './SkillsItem';
import '../styles/components/Skills.styl';

const Skills = (props) => {
  let i = 1;
  return (
    <div className='Skills'>
      <div className='Skills-title'>
        Skills
      </div>
      <div className='Skills-items'>
        {props[0] ?
          (Object.keys(props).map(item => <SkillItem key={i++} {...props[item]} />)) :
          (<div className='Skill-item'> Ninguno </div>) }
      </div>
    </div>
  );
};

export default Skills;
