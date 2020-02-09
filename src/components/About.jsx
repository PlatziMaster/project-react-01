import React from 'react';

const About = ({ about }) => {
  console.log(about);
  return (
    <div className='About'>
      <div className='About-title'>
        <h2>About</h2>
      </div>
      <div className='About-container'>
        {about !== undefined ?
          about.map((item) => {
            return (
              <AboutItem
                key={item.description}
                {...item}
              />
            );
          }) : (
            <>
              <div className='About-item' />
              <div className='About-item' />
              <div className='About-item' />
            </>
          )}
      </div>
    </div>
  );
};

const AboutItem = ({ description }) => {
  return (
    <div className='About-item'>
      {description }
    </div>
  );
};

export default About;
