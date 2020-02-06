import React from 'react';
import '../styles/components/Academic.styl';

const academic = {
  title: 'Academic',
  items: [
    {
      id: 1,
      title: 'Master of Project Management',
      institution: 'Universidad Tecnológica de México',
      period: '07/2018 – 12/2018',
    },
    {
      id: 2,
      title: 'Bachelor of Engineering in Computer Engineering',
      institution: 'UPIICSA - IPN',
      period: '08/2009 – 07/2013',
    },
  ],
};

const Academic = () => {
  return (
    <div className='Academic'>
      <h3 className='Academic-title'>{academic.title}</h3>
      {
        academic.items.map(item => (
          <ul className='Academic-item' key={item.id}>
            <li>{item.title}</li>
            <li>{item.institution}</li>
            <li>{item.period}</li>
          </ul>
        ))
      }
    </div>
  );
};

export default Academic;
