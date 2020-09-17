/* eslint-disable react/no-array-index-key */
import React from 'react';

import '../styles/components/About.styl';

const netWork = {
  name: 'Twitter',
  url: 'https://twitter.com/Danielsantos495',
};

const About = ({ about, social = [netWork] }) => (
  <section className='About'>
    <h2 className='About-title'>Sobre mí</h2>
    <p>{about}</p>
    <ul className='About-item'>
      {social.map((item, i) => (
        <li key={i} className='About-item'>
          <a className='About-item' href={item.url}>{item.name}</a>
        </li>
      ))}
    </ul>
  </section>
);

export default About;
