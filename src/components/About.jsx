import React from 'react';
import '../styles/components/About.styl';

const About = () => {
  return (
    <div className="About">
      <h1 className="About-title">Cristobal Vega</h1>
      <h3 className="About-job-title">Java Developer</h3>
      <p>
        <span className="About-item">+55 555 55 55</span>
        <span className="About-item">hi@cristobalvega.me</span>
        <span className="About-item">cristobalvega.me</span>
      </p>
      <p>
        <span className="About-item">Querétaro, México.</span>
      </p>
    </div>
  );
};

export default About;