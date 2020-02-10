import React, { useContext } from 'react';
import ExperienceLayout from './ExperienceLayout';

import DataContext from '../../contexts/DataContext';

const Experience = () => {
  const { data, loading } = useContext(DataContext);
  const initData = { experience: ['', '', ''] };
  const { experience } = data || initData;
  return <ExperienceLayout loading={loading} experience={experience} />;
};

export default Experience;
