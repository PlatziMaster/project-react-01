/* eslint-disable react/no-array-index-key */
import React from 'react';
import HorizontalBar from '../HorizontalBar';

import './index.styl';

const Languages = ({ loading, languages }) => {
  let className = '';
  if (loading) className = 'loading-item';
  return (
    <div className='Languages'>
      <div className={`Languages-title ${className}`}>Languages</div>
      {
        languages && languages.map((item, index) => (
          <div key={index} className={`Languages-item ${className}`}>
            <HorizontalBar {...item} />
          </div>
        ))
      }
    </div>
  );
};

export default Languages;
