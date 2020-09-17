/* eslint-disable react/no-array-index-key */
import React from 'react';

import '../styles/components/Interest.styl';

const Interest = ({ interest = ['interests'] }) => (
  <section className='Interest'>
    <h2 className='Interest-title Interest-item'>Intereses</h2>
    <ul className='Interest-item'>
      {interest.map((item, i) => (
        <li key={i} className='Interest-item'>{item}</li>
      ))}
    </ul>
  </section>
);

export default Interest;
