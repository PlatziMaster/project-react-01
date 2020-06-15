import React from 'react';


const Interest = ({ itemsArray }) => {
  const items = itemsArray || Array(3).fill(1);
  return (
    <section className='Interest'>
      <h1 className='Interest-title'>Interest</h1>
      <ul>
        {items.map((item, index) => {
          const i = index + 1;
          return (
            <li key={i} className='Interest-item'>{item}</li>
          );
        })}
      </ul>
    </section>
  );
};

export default Interest;
