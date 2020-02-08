import React from 'react';

const Skills = () => {
  const items = [
    {
      'name': 'HTML5',
      'percentage': '75%',
    },
    {
      'name': 'CSS',
      'percentage': '25%',
    },
    {
      'name': 'JavaScript',
      'percentage': '55%',
    },
    {
      'name': 'React',
      'percentage': '90%',
    },
  ];

  return (
    <section>
      <h1 className='Skills-title'>Habilidades</h1>
      {items.map((item, index) => {
        const i = index + 1;
        return (
          <article className='Skills-item' key={i}>
            <p>
              <span>
                {item.name}
              </span>
              <span />
            </p>
            <p>{item.percentage}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Skills;
