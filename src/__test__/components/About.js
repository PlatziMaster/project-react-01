import React from 'react';
import '../../styles/components/About.css';

const About = () => {
  return (
    <div className='About__container'>
      <h2 className='About__title'>About</h2>
      <div className='About__media'>
        <a className='About__item' href='https://twitter.com/JuanchoHerreraC'>Twitter</a>
        <img className='About__image' src='../../images/gorjeo.svg' alt='LinkedIn' width='25px' height='25px' />
        <a className='About__item' href='https://github.com/jshc27'>Github</a>
        <img className='About__image' src='../../images/github.svg' alt='LinkedIn' width='25px' height='25px' />
        <a className='About__item' href='https://www.linkedin.com/in/juan-sebastian-herrera-carvajal-010681153/'>LinkedIn</a>
        <img className='About__image' src='../../images/linkedin.svg' alt='LinkedIn' width='25px' height='25px' />
      </div>
    </div>
  );
};
export default About;
