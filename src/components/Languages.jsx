import React from 'react';
import '../styles/components/Card.styl';

const Languages = ({ data }) => {
  const items = data || [{ 'percentage': '0%' }];

  if (data === 0) {
    return (
      <div className='Academic section3'>
        <h1>Languages</h1>
        <h2>Loading Data Please wait</h2>
      </div>
    );
  }
  return (
    <div className='Languages section3'>
      <h1 className='Languges title'>Languages</h1>
      <ul>
        {items.map((item, id) => {
          
          return (
            <li key={id.toString()}>
              <h2>{item.name}</h2>
              <progress value={parseInt(item.percentage, 10)} max='100' />
            </li>
          );
        })}
      </ul>
    </div>
  );

};

export default Languages;
