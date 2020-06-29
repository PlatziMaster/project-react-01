import React from 'react';

const Language = ({ itemsArray, section }) => {

  const items = itemsArray || Array(3).fill(1);

  return (
    <section className='section Language'>
      <h1 className='Languages-title'>{section}</h1>
      {items.map((item, index) => {
        const i = index + 1;
        return (
          <article className='Languages-item' key={i}>
            <p>{item.name}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Language;
