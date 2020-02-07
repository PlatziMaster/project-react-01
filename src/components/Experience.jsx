import React from 'react';

const Experience = () => {
  const items = [
    {
      'company': 'PugStar',
      'endDate': 'Present',
      'jobDescription': 'scratch the furniture. Good now the other hand, too lay on arms while you\'re using the keyboard.',
      'jobTitle': 'Frontend',
      'startDate': 'Jan 2020',
    },
    {
      'company': 'CatStore',
      'endDate': 'Jan 2019',
      'jobDescription': 'Meow in empty rooms lick left leg for ninety minutes, still dirty.',
      'jobTitle': 'Backend',
      'startDate': 'Sept 2016',
    },
    {
      'company': 'My Home',
      'endDate': 'Jan 2015',
      'jobDescription': 'Baby in my house',
      'jobTitle': 'Dormir',
      'startDate': 'Jan 2000',
    },
  ];

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
            <small className='dates'>{`${item.endDate} - ${item.startDate}`}</small>
          </article>
        );
      })}
    </section>
  );
};

export default Experience;
