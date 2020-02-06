import React from 'react';

import '../styles/components/Academic.styl';

const Academic = ({ academic = [] }) => {
  return (
    <section className="Academic">
      <h1 className="Academic-title">Academic</h1>
      <div className="Academic-content">
        {academic.map(ac => (
          <div key={ac.degree} className="Academic-item">
            <h3>{ac.degree}</h3>
            <p>{ac.description}</p>
            <span>{ac.institution}</span>
            <span>
              {ac.startDate} to {ac.endDate}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Academic;
