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
      <h1 className='Interest-title'>Interests</h1>
      <ul className='Interest-item List'>
        {items.map((item, id) => {
          return (
            <li key={id.toString()} className='Interest-item'>
              <h2 key={id.toString()} className='Interest-item'>{item}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );

};

export default Interests;
