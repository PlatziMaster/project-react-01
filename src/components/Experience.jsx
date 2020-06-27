import React from 'react';

const Experience = ({ itemsArray }) => {

  const items = itemsArray || Array(3).fill(1);

  return (
    <>
      <section className='section Experience'>
        <h3 className='Experience-title'>Experience</h3>
        {items.map((item, index) => {
          const i = index + 1;
          return (
            <article className='Experience-item' key={i}>
              <h3>{item.company}</h3>
              <h4>{item.jobTitle}</h4>
              <p>{item.jobDescription}</p>
              <span>{`${item.endDate} - ${item.startDate}`}</span>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Experience;
