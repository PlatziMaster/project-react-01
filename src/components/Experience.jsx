import React from 'react';

const Experience = (props) => {
  const {
    title = 'Experience',
    experience = [
      {
        'id': 1,
        'company': 'PugStar',
        'endDate': 'Present',
        'jobDescription': "scratch the furniture. Good now the other hand, too lay on arms while you're using the keyboard.",
        'jobTitle': 'Frontend',
        'startDate': 'Jan 2020',
      },
      {
        'id': 2,
        'company': 'CatStore',
        'endDate': 'Jan 2016',
        'jobDescription': 'Meow in empty rooms lick left leg for ninety minutes, still dirty.',
        'jobTitle': 'other',
        'startDate': 'Sept 2019',
      },
      {
        'id': 3,
        'endDate': 'Jan 2016',
        'jobDescription': 'Meow in empty rooms lick left leg for ninety minutes, still dirty.',
        'jobTitle': 'Backend',
        'startDate': 'Sept 2019',
      },
    ],
  } = props;
  return (
    <section className='Experience'>
      <h2 className='Experience-title'>{title}</h2>
      <div className='Experience-content'>
        {experience.map(item => (
          <div key={item.id} className='Experience-item'>
            <h3>{item.company}</h3>
            <p>
              {item.jobTitle}
              <br />
              {item.jobDescription}
              <br />
              {item.startDate}
              {' '}
              -
              {' '}
              {item.endDate}
            </p>
            {/* <p>{item.jobDescription}</p>
            <p>
              {item.startDate}
              {' '}
              -
              {' '}
              {item.endDate}
            </p> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
