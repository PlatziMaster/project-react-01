import React from 'react';

const Interest = (props) => {
  const {
    title = 'Interest',
    interest = [
      'javascript',
      'develop',
      'backend',
      'frontend',
    ],
  } = props;
  return (
    <section className='Interests'>
      <h2 className='Interest-title'>{title}</h2>
      <div className='Interest-content'>
        {interest.map(item => (
          <p key={item} className='Interest-item'>{item}</p>
        ))}
      </div>
    </section>
  );
};

export default Interest;
