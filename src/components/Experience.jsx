import React from 'react';

const Experience = (props) => {
  return (
    <div>
      <h2 className="Academic-title">Experience</h2>
      {props.experience.map(ac => (
        <div className="Academic__card">
          <h3 className="Academic__institution">{ac.company}</h3>
          <h4 className="Academic__degree">{ac.jobTitle}</h4>
          <span className="Academic__desc">{ac.jobDescription}</span>
          <br />
          <span className="Academic__start">{ac.startDate}</span> -
          <span className="Academic__end">{ac.endDate}</span>
        </div>
      ))}
    </div>
  );
};

export default Experience;
