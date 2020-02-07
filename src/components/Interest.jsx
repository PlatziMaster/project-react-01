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
      <h1 className='Interest-title Subtitle'>
        Interests
      </h1>
      <section className='Interest-items'>
        {Interests.map(item => (
          <p key={item} className='Interest-item'>
            {item}
          </p>
        ))}
      </section>
    </section>
  );
};

export default Interest;
