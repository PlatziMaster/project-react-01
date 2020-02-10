/* eslint-disable react/no-array-index-key */
import React from 'react';
import HorizontalBar from '../HorizontalBar';

const SkillsLayout = ({ loading, skills }) => {
  let className = '';
  if (loading) className = 'loading-item';
  return (
    <div className='Skills'>
      <div className={`Skills-title ${className}`}>Skills</div>
      {skills &&
        skills.map((item, index) => (
          <div key={index} className={`Skills-item ${className}`}>
            <HorizontalBar {...item} />
          </div>
        ))}
    </div>
  );
};

export default SkillsLayout;
