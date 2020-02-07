import React from 'react';

const Academic = () => {
  const items = [
    {
      'degree': 'Atomic Master',
      'description': 'Estudios rápidos como los de Duq...ue',
      'endDate': 'Jan 2018',
      'institution': 'MIT',
      'startDate': 'Jan 2018',
    },
    {
      'degree': 'Space Engineering',
      'description': 'Meow in empty rooms. Find empty spot in cupboard and sleep all day check cat door for ambush 10 times before coming in for hack. ',
      'endDate': 'December 2017',
      'institution': 'Harvard',
      'startDate': 'Jan 2015',
    },
    {
      'degree': 'Bachelor',
      'description': 'Easy School',
      'endDate': 'December 2017',
      'institution': 'Colegio de la Esquina',
      'startDate': 'Jan 2015',
    },
  ];

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
            <small className='dates'>{`${item.endDate} - ${item.startDate}`}</small>
          </article>
        );
      })}
    </section>
  );
};

export default Academic;
