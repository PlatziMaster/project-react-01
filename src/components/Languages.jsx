import React from 'react';
import '../styles/components/Card.styl';

const Languages = ({ data }) => {
  const items = data || ['Loading Data'];

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
      <h1>Languages</h1>
      <div className='flexbox'>
        {items.map((item) => {
          return (
            <h2 key={item.name}>{item.name}</h2>
          );
        })}
      </div>
    </div>
  );

};

export default Languages;
