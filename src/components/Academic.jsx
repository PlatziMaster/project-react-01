import React from 'react';
import '../styles/components/Academic.styl';
const Academic = ({ Academic = [] }) => (
  <div className="Academic">
    <h2 className="Academic-title">Academic Titles</h2>
    {Academic.map(item => (
      <div className="Academic-item">
        <span>
          {item.startDate} / {item.endDate}
        </span>
        <div>
          <h3>{item.degree}</h3>
          <p>{item.description}</p>
          <p>{item.institution}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Academic;
