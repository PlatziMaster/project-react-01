import React from 'react';

const About = () => {
  const about = [
    { about: 'Jugar Futbol' },
    { about: 'Jugar Videojuegos' },
    { about: 'Hacer ejercicio' },
  ];
  return (
    <div className='About'>
      <div className='About-title'>
        About
      </div>
      <div className='About-container'>
        {about &&
        about.map((item) => {
          return (
            <AboutItem
              key={item.about}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
};

const AboutItem = ({ about }) => {
  return (
    <div className='About-item'>
      {about}
    </div>
  );
};

export default About;
