import React from 'react';
import '../styles/components/Interest.styl';
const Interest = ({ Interests = [] }) => (
  <div className="Interest">
    <h2 className="Interest-title">Interests</h2>
    <div className="Interest-container">
      {Interests.map(item => (
        <div className="Interest-item">
          <p>{item}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Interest;
