import React from 'react';
import '../styles/components/About.styl';

const About = () => {
  return (
    <div className='About-container'>
      <div className='About-title-container'>
        <h1 className='About-title'>Nombre Completo</h1>
        <h2>Profesion</h2>
      </div>
      <ul className='About-item-container'>
        <li className='About-item'>Celular: XXXXXXXXX</li>
        <li className='About-item'>Email: example@gmail.com</li>
        <li className='About-item'>Website: example.com.co</li>
        <li className='About-item'>Direccion: Calle 100 # 100-20 Pais</li>
      </ul>
    </div>
  );
};

export default About;
