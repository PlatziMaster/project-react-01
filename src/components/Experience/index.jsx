import React from 'react';
import ExperienceLayout from './ExperienceLayout';

const Experience = () => {
  const experience = ['item', 'item', 'item'];
  return <ExperienceLayout loading experience={experience} />;
};

export default Experience;
