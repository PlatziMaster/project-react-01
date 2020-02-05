import React from 'react';
import '../styles/components/App.styl';

const Experience = (props) => {

  const {
    profession = 'Developer',
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
    <section className='Experience'>
      <h1 className='Experience__title'>
        Experience
      </h1>
      {experience.map(item => (
        <section key={item.jobTitle} className='Experience__item'>
          <p className='Experience__item-job-title'>
            {item.jobTitle}
            {' '}
            |
            {' '}
            {item.company}
          </p>
          <p className='Experience__item-dates'>
            {item.startDate}
            {' '}
            -
            {' '}
            {item.endDate}
          </p>
          <p className='Experience__item-job-description'>
            {item.jobDescription}
          </p>
        </section>
      ))}
    </section>
  );
};

export default Experience;
