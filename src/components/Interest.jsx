import React from 'react';
import '../styles/components/Interest.css';

const Interest = ({ interests }) => {
  return (
    <div className='Interest'>
      <h2 className='Interest-title'>Interest</h2>
      {interests.map((item, index) => (
        <div className='Interest-item'>
          <h4>{item}</h4>
        </div>
      ))}
    </div>
  );
};

export default Interest;
