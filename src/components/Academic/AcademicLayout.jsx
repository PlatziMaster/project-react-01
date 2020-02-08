/* eslint-disable react/no-array-index-key */
import React from 'react';

const AcademicLayout = ({ loading, title, academic }) => {
  let className = '';
  if (loading) className = 'loading-item';
  return (
    <div className='Academic'>
      <div className={`Academic-title ${className}`}>{title}</div>
      {
        academic.map((item, index) => (
          <div key={index} className={`Academic-item ${className}`}>{item}</div>
        ))
      }
    </div>
  );
};

export default AcademicLayout;
