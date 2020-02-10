import React from 'react';
import '../styles/components/Academic.styl';
const Academic = ({ academics }) => {
  return (
    <div className="Academic card shadow">
      <h1 className="Academic-title">Academic</h1>
      <ul>
        {academics &&
          academics.length > 0 &&
          academics.map((academic, idx) => (
            <li className="Academic-item" key={`academic-${idx}`}>
              <h3>{academic.degree} | {academic.institution}</h3>
              <small>{academic.startDate} - {academic.endDate}</small>
              <div className="Academic-job-desc">
                {academic.description}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Academic;
