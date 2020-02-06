import React from 'react';
import '../styles/components/Interest.styl';

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
    <section className='Interests Box'>
      <h1 className='Interests__title Subtitle'>
        Interests
      </h1>
      <section className='Interests__items'>
        {Interests.map(item => (
          <p key={item} className='Interests__item'>
            {item}
          </p>
        ))}
      </section>
    </section>
  );
};

export default Interest;
