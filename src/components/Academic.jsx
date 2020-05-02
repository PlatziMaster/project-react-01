import React from 'react';
import '../styles/components/Card.styl';

const Academic = ({ data }) => {
  const items = data || ['Loading Data'];

  if (data === 0) {
    return (
      <div className='Academic section3'>
        <h1>Academic</h1>
        <h2>Loading Data Please wait</h2>
      </div>
    );
  }
  return (
    <div className='Academic section3'>
      <h1>Academic</h1>
      <div className='flexbox'>
        {items.map((acad) => {

          return (
            <h2 key={acad.endDate}>{acad.degree}</h2>
          );
        })}
      </div>
    </div>
  );
};

export default Academic;
