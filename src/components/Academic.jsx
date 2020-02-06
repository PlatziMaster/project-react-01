import React from 'react';
import '../styles/components/Academic.styl';

const Academic = (props) => {
  const {
    Academic = [
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
    ],
  } = props;

  return (
    <section className='Academic Box'>
      <h1 className='Academic__title Subtitle'>
        Academic
      </h1>
      {Academic.map(item => (
        <section key={item.degree} className='Academic__item '>
          <p className='Academic__item-job-title Item__title'>
            {item.degree}
            {' '}
            |
            {' '}
            {item.institution}
          </p>
          <p className='Academic__item-dates Item__subtitle'>
            {item.startDate}
            {' '}
            -
            {' '}
            {item.endDate}
          </p>
          <p className='Academic__item-job-description Item__description'>
            {item.description}
          </p>
        </section>
      ))}
    </section>
  );
};

export default Academic;
