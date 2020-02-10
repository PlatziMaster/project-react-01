/* eslint-disable react/no-array-index-key */
import React from 'react';
import Job from './Job';

import './index.styl';

const ExperienceLayout = ({ loading, experience }) => {
  let className = '';
  if (loading) className = 'loading-item';
  return (
    <div className='Experience'>
      <div className={`Experience-title ${className}`}>Experience</div>
      {
        experience && experience.map((item, index) => (
          <div key={index} className={`Experience-item ${className}`}>
            <Job {...item} />
          </div>
        ))
      }
    </div>
  );
};

export default ExperienceLayout;
