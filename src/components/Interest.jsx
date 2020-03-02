import React from 'react';
import '../styles/components/Interest.styl';

const Interest = ({ hobbies }) => {
  const items = hobbies || Array(3).fill(1);;
  return (
    <div className='Interest-container'>
      <div className='Interest-title'>
        <h2>Interests</h2>
      </div>
      {items.map((item, index) => {
        const i = index + 1;
        return (
          <div className='Interest-item' key={i}>
            <h2>{item}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Interest;
