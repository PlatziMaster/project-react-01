import React, { useContext } from 'react';
import InformationContext from '../../data';

export default function Skill() {
  const Information = useContext(InformationContext);
  return (
    <div className="Skills containter">
      <div className="Skills-title">
        <h2>Skills</h2>
      </div>
      <div className="skill-desc">
        <div className="Skills-item">
          <p>{Information.skills[0].name}</p>
        </div>
        <div className="Skills-item">
          <p>{Information.skills[1].name}</p>
        </div>
        <div className="Skills-item">
          <p>{Information.skills[2].name}</p>
        </div>
        <div className="Skills-item">
          <p>{Information.skills[3].name}</p>
        </div>
      </div>
    </div>
  );
}
