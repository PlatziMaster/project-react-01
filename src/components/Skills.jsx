import React from 'react';


const Skills = ({ itemsArray }) => {

  const items = itemsArray || Array(3).fill(1);

  return (
    <section className='Skills'>
      <h1 className='Skills-title'>Skills-title</h1>
      {items.map((items, index) => {
        const i = index + 1;
        return (
          <article className='Skills-item' key={i}>
            <p>
              <span>
                {items.name}
              </span>
            </p>
            <p>{items.percentage}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Skills;
