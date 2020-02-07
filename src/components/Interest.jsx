import React from 'react';
import '../styles/components/Interest.styl';

const Interest = (props) => {
  const {
    interest = [
      'javascript',
      'develop',
      'backend',
      'frontend',
    ],
  } = props;
  console.log(interest);
  return (
    <section className='Interests Box'>
      <h1 className='Interest-title Subtitle'>
        Interests
      </h1>
      <section className='Interest-items'>
        {interest.map((item, index) => (
          <p key={index} className='Interest-item'>
            {item}
          </p>
        ))}
      </section>
    </section>
  );
};

export default Interest;
