import React from 'react';
import '../styles/components/Academic.styl';

const Certificate = props => {
  return (
    <div>
      <h2 className="Academic-title">Certicates</h2>
      {props.certificate.map(c => (
        <div className="Academic__card">
          <h3 className="Academic__institution">{c.institution}</h3>
          <h4 className="Academic__degree">{c.name}</h4>
          <span className="Academic__desc">{c.description}</span>
          <br />
          <span className="Academic__start">{c.date}</span>
        </div>
      ))}
    </div>
  );
};

export default Certificate;
