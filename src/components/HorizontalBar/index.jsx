import React from 'react';

import './index.styl';

const HorizontalBar = ({ name, percentage, color = '#e44d26' }) => {
  const style = {
    backgroundColor: color,
    width: percentage,
  };
  return (
    <div className='HorizontalBar'>
      <div>
        <span>{name}</span>
      </div>
      <div className='bar' style={style}>
        {percentage}
      </div>
    </div>
  );
};

export default HorizontalBar;
