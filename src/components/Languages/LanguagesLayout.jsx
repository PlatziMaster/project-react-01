/* eslint-disable react/no-array-index-key */
import React from 'react';

import './index.styl';

const Languages = ({ loading, title, languages }) => {
  let className = '';
  if (loading) className = 'loading-item';
  return (
    <div className='Languages'>
      <div className={`Languages-title ${className}`}>{title}</div>
      {
        languages.map((item, index) => (
          <div key={index} className={`Languages-item ${className}`}>
            {item}
          </div>
        ))
      }
    </div>
  );
};

export default Languages;
