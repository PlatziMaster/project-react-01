import React from 'react';

const Experience = props => {
  return (
    <div className="General__main">
      <h2 className="Experience-title">Frontend developer</h2>
      <div className="Experience-cover">
        {Object.values(props).map((item, index) => (
          <p className="Experience-item" key={index}>
            <b>Experiencia:</b> {item.jobTitle} <b>Company:</b> {item.company}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Experience;
