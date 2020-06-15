import React from 'react';


const Language = ({ itemsArray }) => {

  const items = itemsArray || Array(3).fill(1)

  return (
    <section className='Language'>
      <h1 className='Languages-title'>Language-title</h1>
      {items.map((item, index) => {
        const i = index + 1;
        return (
          <article className='Languages-item' key={i}>
            <p>{item.name}</p>
            <p>{item.percentage}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Language;
