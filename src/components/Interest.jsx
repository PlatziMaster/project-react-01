import React from 'react';
import '../styles/components/Interest.styl';

const Interest = ({ hobbies }) => {
  const items = hobbies || Array(3).fill(1);;
  return (
    <div className='Interest-container'>
      <div className='Interest-title'>
        <h1>Intereses</h1>
      </div>
      <div className='Interest-item-container'>
        {items.map((item, index) => {
          const i = index + 1;
          return (
            <div className='Interest-item' key={i}>
              <p>{item}</p>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Interest;
