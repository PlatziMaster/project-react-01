import React from 'react';
import '../styles/components/Languages.styl';
const Languages = ({ Languages = [] }) => (
  <div className="Languages-container">
    <h1 className="Languages-title">Languages</h1>
    {Languages.map(item => (
      <div className="Languages-tem">
        <p>{item.name}</p>
        <div>{item.percentage}</div>
      </div>
    ))}
  </div>
);

export default Languages;
