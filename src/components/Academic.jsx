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
      <h1 className='Academic-title title'>Academic</h1>
      <ul className='Academic-item list'>
        {items.map((item, id) => {
          return (
            <li key={id.toString()} className='Academic-item item'>
              <h1 className='Academic-item degree'>{item.degree}</h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Academic;
