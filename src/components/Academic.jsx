import React from 'react';

const Academic = ({ itemsArray }) => {
  const items = itemsArray || Array(3).fill(1);

  return (
    <section>
      <h1 className='Academic-title'>Estudios Académicos</h1>
      {items.map((item, index) => {
        const i = index + 1;
        return (
          <article className='Academic-item' key={i}>
            <h2>{item.degree}</h2>
            <h3>{item.institution}</h3>
            <p className='description'>{item.description}</p>
            <span className='dates'>{`${item.endDate} - ${item.startDate}`}</span>
          </article>
        );
      })}
    </section>
  );
};

export default Academic;
