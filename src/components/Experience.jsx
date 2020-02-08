import React from 'react';

const Experience = ({ itemsArray }) => {
  const items = itemsArray || Array(3).fill(1);

  return (
    <section>
      <h1 className='Experience-title'>Experiencia</h1>
      {items.map((item, index) => {
        const i = index + 1;
        return (
          <article className='Experience-item' key={i}>
            <h2>{item.company}</h2>
            <h3>{item.jobTitle}</h3>
            <p className='description'>{item.jobDescription}</p>
            <span className='dates'>{`${item.endDate} - ${item.startDate}`}</span>
          </article>
        );
      })}
    </section>
  );
};

export default Experience;
