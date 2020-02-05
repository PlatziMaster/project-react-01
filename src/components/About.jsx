import React from 'react';
import '../styles/components/About.styl';

const About = () => {
  return (
    <div className="About">
      <h1 className="About-title">Jefferson Aguilar</h1>
      <h3 className="About-job-title">Director de IT</h3>
      <p>
        <span className="About-item">+573014364456</span>
        <span className="About-item">jefferson@alunideas.com</span>
        <span className="About-item">www.google.com</span>
      </p>
      <p>
        <span className="About-item">Calle Carrera</span>
      </p>
    </div>
  );
};

export default About;
