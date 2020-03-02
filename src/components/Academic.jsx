import React from 'react';
import '../styles/components/Academic.styl';

const Academic = ({ courses }) => {
  const items = courses || Array(3).fill(1);;
  return (
    <div className='Academic-container'>
      <div className='Academic-title'>
        <h1>Estudios Académicos</h1>
      </div>
      {items.map((item, index) => {
        const i = index + 1;
        return (
          <div className='Academic-item' key={i}>
            <h2>{item.degree}</h2>
            <p>{item.institution}</p>
            <p>{item.description}</p>
            <p>{`${item.startDate} - ${item.endDate}`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Academic;
