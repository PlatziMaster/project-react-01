import React from 'react';
import Degree from './Degree';

const Academic = ({ Academic }) => {
  return (
    <div className='Academic'>
      <h2 className='titleLabel'>Academic</h2>
      {Academic && Academic.map((degreeInfo) => {
        return (
          <Degree {...degreeInfo} />
        );
      })}

    </div>
  );
};

export default Academic;
