import React from 'react';

const Academic = (props) => {
  const {
    title = 'Academic',
    academic = [
      {
        'degree': 'Atomic Master',
        'description': ' I’m so hungry i’m so hungry but ew not for that pelt around the house and up and down stairs chasing phantoms',
        'endDate': 'Jan 2017',
        'institution': 'MIT',
        'startDate': 'Jan 2018',
      },
      {
        'degree': 'Space Engineering',
        'description': 'Meow in empty rooms. Find empty spot in cupboard and sleep all day check cat door for ambush 10 times before coming in for hack. ',
        'endDate': 'Decenber 2015',
        'institution': 'Harvard',
        'startDate': 'Jan 2017',
      },
      {
        'degree': 'Engineering',
        'description': 'Meow in empty rooms. Find empty spot in cupboard and sleep all day check cat door for ambush 10 times before coming in for hack. ',
        'endDate': 'Decenber 2015',
        'institution': 'Harvard',
        'startDate': 'Jan 2017',
      },
    ],
  } = props;
  return (
    <section className='Academic'>
      <h1 className='Academic-title'>{title}</h1>
      {academic.map(item => (
        <div key={item.degree} className='Academic-item'>
          <h3>{item.degree}</h3>
          <p>{item.description}</p>
          <span>
            {item.institution}
            {' '}
          </span>
          <span>
            {item.startDate}
            {' '}
            to
            {' '}
            {item.endDate}
          </span>
        </div>
      ))}
    </section>
  );
};

export default Academic;
