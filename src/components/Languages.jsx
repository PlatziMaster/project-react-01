import React from 'react';
import '../styles/components/Languages.styl';
const Languages = ({ Languages = [] }) => (
  <div className="Languages">
    <h2 className="Languages-title">Languages</h2>
    <div className="Languages-container">
      {Languages.map(item => (
        <div className="Languages-item">
          <p>{item.name}</p>
          <div>{item.level}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Languages;
