/* eslint-disable react/no-array-index-key */
import React from 'react';

import './index.styl';

const InterestLayout = ({ loading, interest }) => {
  let className = '';
  if (loading) className = 'loading-item';
  return (
    <div className='Interest'>
      <div className={`Interest-title ${className}`}>Interests</div>
      {
        interest && interest.map((item, index) => (
          <div key={index} className={`Interest-item ${className}`}>
            {item}
          </div>
        ))
      }
    </div>
  );
};

export default InterestLayout;
