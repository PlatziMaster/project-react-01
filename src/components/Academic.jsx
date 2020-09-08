import React from 'react';
import '../styles/components/Academic.styl';

const Academic = props => {
  return (
    <div>
      <h2 className="Academic-title">Academic</h2>
      {props.academic.map(ac => (
        <div className="Academic__card">
          <h3 className="Academic__institution">{ac.institution}</h3>
          <h4 className="Academic__degree">{ac.degree}</h4>
          <span className="Academic__desc">{ac.description}</span>
          <br />
          <span className="Academic__start">{ac.startDate}</span> -
          <span className="Academic__end">{ac.endDate}</span>
        </div>
      ))}
    </div>
  );
};

export default Academic;
