import React, { useContext } from 'react';
import SkillsLayout from './SkillsLayout';

import DataContext from '../../contexts/DataContext';

const Skills = () => {
  const { data, loading } = useContext(DataContext);
  const initData = { skills: ['item', 'item', 'item'] };
  const { skills } = data || initData;
  return <SkillsLayout loading={loading} skills={skills} />;
};

export default Skills;
