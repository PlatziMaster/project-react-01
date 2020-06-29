import React from 'react';

const Academic = ({ itemsArray, section }) => {

  const items = itemsArray || Array(3).fill(1);

  return (
    <>
      <section className='section Academic'>
        <h3 className='Academic-title'>{section}</h3>
        {items.map((item, index) => {
          const i = index + 1;
          return (
            <article className='Academic-item' key={i}>
              <h3>{item.degree}</h3>
              <h4>{item.institution}</h4>
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
