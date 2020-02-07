import React from 'react';

const About = () => {
  const items = [
    { phone: 'my phone number' },
    { email: 'my email' },
    { website: 'my website' },
    { address: 'my address' },
  ];
  return (
    <article>
      <h3 className='About-title'>My profile title</h3>
      <img src='https://arepa.s3.amazonaws.com/melissa.jpg' alt='avatar' />
      {items.map(item => (
        <p className='About-item' key={Object.keys(item)}>
          {Object.values(item)}
        </p>
      ))
      }
    </article>
  );
};

export default About;
