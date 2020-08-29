import React, { useState, useEffect } from 'react';
import '../styles/components/Experience.styl';

const Experience = ({ experience = [{}, {}, {}]}) => {

  return (
    <section className='Experience'>
      <h2 className="Experience-title">Experiencia</h2>
      <section className='Experiences'>
        {   
          experience.map((element, index) => 
            (<section className='Experience-item' key={index}>
            <h3 className='item'>{element.company}</h3>
            <p className='item'>{element.jobTitle}</p>
            <p className='item'>{element.jobDescription}</p>
          </section>))
        }
      </section>
    </section>
  )
}

export default Experience;
