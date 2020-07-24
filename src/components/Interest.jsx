import React from 'react';
import '../styles/components/Interest.styl';
const Interest = ({ Interests = [] }) => (
  <div className="Interest">
    <h2 className="Interest-title">Interests</h2>
    {Interests.map(item => (
      <div className="Interest-item">
        <p>{item}</p>
      </div>
    ))}
  </div>
);

export default Interest;
