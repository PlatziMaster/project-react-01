import React from 'react';
import '../styles/components/Experience.styl';

const Experience = (props) => {

  const {
    experience = [
      {
        'company': 'PugStar',
        'endDate': 'Present',
        'jobDescription': "scratch the furniture. Good now the other hand, too lay on arms while you're using the keyboard.",
        'jobTitle': 'Frontend',
        'startDate': 'Jan 2020',
      },
      {
        'company': 'CatStore',
        'endDate': 'Jan 2016',
        'jobDescription': 'Meow in empty rooms lick left leg for ninety minutes, still dirty.',
        'jobTitle': 'Backend',
        'startDate': 'Sept 2019',
      },
    ],
  } = props;

  return (
    <section className='Experience Box'>
      <h1 className='Experience__title Subtitle'>
        Experience
      </h1>
      {experience.map(item => (
        <section key={item.jobTitle} className='Experience__item'>
          <p className='Experience__item-job-title Item__title'>
            {item.jobTitle}
            {' '}
            |
            {' '}
            {item.company}
          </p>
          <p className='Experience__item-dates Item__subtitle'>
            {item.startDate}
            {' '}
            -
            {' '}
            {item.endDate}
          </p>
          <p className='Experience__item-job-description Item__description'>
            {item.jobDescription}
          </p>
        </section>
      ))}
    </section>
  );
};

export default Experience;
