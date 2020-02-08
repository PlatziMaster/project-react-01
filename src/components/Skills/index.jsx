import React from 'react';
import SkillsLayout from './SkillsLayout';

const Skills = () => {
  const skills = ['item', 'item', 'item'];
  return <SkillsLayout loading skills={skills} />;
};

export default Skills;
