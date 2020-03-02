import React from 'react';
import '../styles/components/Languages.styl';

const Languages = ({ languages }) => {
  const items = languages || Array(3).fill(1);;
  return (
    <div className='Languages-container'>
      <div className='Languages-title'>
        <h2>Languages</h2>
      </div>
      {items.map((item, index) => {
        const i = index + 1;
        return (
          <div className='Languages-item' key={i}>
            <h2>{item.name}</h2>
            <h2>{item.percentage}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Languages;
