/* eslint-disable react/no-array-index-key */
import React from 'react';
import Degree from './Degree';

const AcademicLayout = ({ loading, academic }) => {
  let className = '';
  if (loading) className = 'loading-item';
  return (
    <div className='Academic'>
      <div className={`Academic-title ${className}`}>Education</div>
      {academic &&
        academic.map((item, index) => (
          <div key={index} className={`Academic-item ${className}`}>
            <Degree {...item} />
          </div>
        ))}
    </div>
  );
};

export default AcademicLayout;
