import React from 'react';
import '../styles/components/Card.styl';

const Interests = ({ data }) => {
  const items = data || ['Loading Data'];

  if (data === 0) {
    return (
      <div className='Academic section3'>
        <h1>Interests</h1>
        <h2>Loading Data Please wait</h2>
      </div>
    );
  }
  return (
    <div className='Interest section3'>
      {}
      <h1>Interests</h1>
      <div className='flexbox'>
        {items.map((item) => {
          return (
            <h2 key={item}>{item}</h2>
          );
        })}
      </div>
    </div>
  );

};

export default Interests;
