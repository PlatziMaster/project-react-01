import React from 'react';

const Academic = ({ itemsArray }) => {

  const items = itemsArray || Array(3).fill(1);

  return (
    <>
      <section className='Academic'>
        <h1 className='Academic-title'>Academic-title</h1>
        {items.map((item, index) => {
          const i = index + 1;
          return (
            <article className='Academic-item' key={i}>
              <h2>{item.degree}</h2>
              <h3>{item.institution}</h3>
              <p>{item.description}</p>
              <span className='dates'>{`${item.endDate} - ${item.startDate}`}</span>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Academic;
