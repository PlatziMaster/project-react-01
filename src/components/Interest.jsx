import React from 'react';
import '../styles/components/App.styl';

const Interest = (props) => {
  const {
    Interests = [
      'javascript',
      'develop',
      'backend',
      'frontend',
    ],
  } = props;

  return (
    <section className='Interests'>
      <h1 className='Interests__title'>
        Interests
      </h1>
      {Interests.map(item => (
        <section key={item} className='Interests__item'>
          <p className='Interests__item-job-title'>
            {item}
          </p>
        </section>
      ))}
    </section>
  );
};

export default Interest;
