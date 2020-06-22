import React from 'react';
import '../styles/components/Interests.styl';

const Interest = data => (
  <div className="Interests">
    <h2 className="Interest-title">Interests</h2>
    <ul className="Interest-list">
      {data.interest?.map(item => (
        <li className="Interest-item" key={item}>
          {item}
        </li>
      ))}
    </ul>
    <span className="Interest-item"></span>
    <span className="Interest-item"></span>
    <span className="Interest-item"></span>
  </div>
);

export default Interest;
