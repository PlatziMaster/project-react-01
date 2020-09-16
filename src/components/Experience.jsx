/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import '../styles/components/Experience.styl';

const proyectos = {
  proyecto: 'loading...',
  description: 'loading...',
  site: 'loading...',
  means: 'loading...',
};

const Experience = ({ proyectosPersonales = [proyectos] }) => (
  <section className='Experience'>
    <h2 className='Experience-title'>Proyectos Personales.</h2>
    {proyectosPersonales.map((item, i) => (
      <article className='Experience-item' key={i}>
        <a href={item.site} className='Experience-item'>{item.proyecto}:</a>
        <p className='Experience-item'>{item.description}</p>
        <p>
          Proyecto tomado de FrontMentor: {' '}
          <a href={item.means} target='_blank' rel='noreferrer'>{item.proyecto}</a>
        </p>
      </article>
    ))}
  </section>
);

export default Experience;
