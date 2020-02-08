/* eslint-disable react/no-array-index-key */
import React from 'react';

import './index.styl';

const ExperienceLayout = ({ loading, title, experience }) => {
  let className = '';
  if (loading) className = 'loading-item';
  console.log(experience);
  return (
    <div className='Experience'>
      <div className={`Experience-title ${className}`}>{title}</div>
      {
        experience.map((item, index) => (
          <div key={index} className={`Experience-item ${className}`}>{item}</div>
        ))
      }
    </div>
  );
};

export default ExperienceLayout;
