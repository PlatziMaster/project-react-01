import React from 'react';

const Languages = () => {
  const items = [
    {
      'name': 'Spanish',
      'percentage': '90%',
    },
    {
      'name': 'English',
      'percentage': '50%',
    },
    {
      'name': 'Japanese',
      'percentage': '0.4%',
    },
  ];

  return (
    <section>
      <h1 className='Languages-title'>Idiomas</h1>
      {items.map((item, index) => {
        const i = index + 1;
        return (
          <article className='Languages-item' key={i}>
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

export default Languages;
