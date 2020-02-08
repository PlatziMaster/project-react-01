/* eslint-disable react/no-array-index-key */
import React from 'react';

const SkillsLayout = ({ loading, title, skills }) => {
  let className = '';
  if (loading) className = 'loading-item';
  return (
    <div className='Skills'>
      <div className={`Skills-title ${className}`}>{title}</div>
      {
        skills.map((item, index) => (
          <div key={index} className={`Skills-item ${className}`}>{item}</div>
        ))
      }
    </div>
  );
};

export default SkillsLayout;
