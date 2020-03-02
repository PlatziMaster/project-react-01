import React from 'react';
import '../styles/components/About.styl';

const About = ({ name, profession, address, email, website, phone }) => {
  return (
    <div className='About-container'>
      <div className='About-title-container'>
        <h1 className='About-title'>{name}</h1>
        <h2>{profession}</h2>
      </div>
      <ul className='About-item-container'>
        <li className='About-item'>{`Celular: ${phone}`}</li>
        <li className='About-item'>{`Correo: ${email}`}</li>
        <li className='About-item'>{`Website: ${website}`}</li>
        <li className='About-item'>{`Direccion: ${address}`}</li>
      </ul>
    </div>
  );
};

export default About;
