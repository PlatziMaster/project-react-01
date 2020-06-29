import React from 'react';

const Skills = ({ itemsArray, section }) => {

  const items = itemsArray || Array(3).fill(1);

  return (
    <section className='section Skills'>
      <h1 className='Skills-title'>{section}</h1>
      {items.map((items, index) => {
        const i = index + 1;
        return (
          <div className='Skills-container' key={i}>
            <article className='Skills-item'>
              <p>
                <span>
                  {items.name}
                </span>
              </p>
              <img src={items.percentage} alt='logo html' />
            </article>
          </div>
        );
      })}
    </section>
  );
};

export default Skills;
