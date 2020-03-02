import React from 'react';
import '../styles/components/Languages.styl';

const Languages = ({ languages }) => {
  const items = languages || Array(3).fill(1);;
  return (
    <div className='Languages-container'>
      <div className='Languages-title'>
        <h1>Idiomas</h1>
      </div>
      {items.map((item, index) => {
        const i = index + 1;
        return (
          <div className='Languages-item' key={i}>
            <span>{item.name}</span>
            <span>____________</span>
            <span>{item.percentage}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Languages;
