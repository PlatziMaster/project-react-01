import React from 'react';
import '../styles/components/Interest.styl';

const Interest = () => {
  return (
    <div className='Interest-container'>
      <div className='Interest-title'>
        <h2>Interests</h2>
      </div>
      <div className='Interest-item'>
        <p>Interest 1</p>
      </div>
      <div className='Interest-item'>
        <p>Interest 2</p>
      </div>
      <div className='Interest-item'>
        <p>Interest 3</p>
      </div>
      <div className='Interest-item'>
        <p>Interest 4</p>
      </div>
    </div>
  );
};

export default Interest;
