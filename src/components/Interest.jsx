import React from 'react';
import '../styles/components/Interest.styl';
const Interest = ({ interests }) => {
  return (
    <div className="Interest card shadow">
      <h1 className="Interest-title">Interest</h1>
      <ul>
        {interests &&
          interests.length > 0 &&
          interests.map((interest, idx) => (
            <li className="Interest-item" key={`interest-${idx}`}>
              <h3>{interest}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Interest;
