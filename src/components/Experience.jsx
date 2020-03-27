import React, { useContext } from 'react';
import InformationContext from '../../data';

export default function Experience() {
  const Information = useContext(InformationContext);

  return (
    <div className="Experience containter">
      <div className="Experience-title">
        <h2>Experiencia</h2>
      </div>

      <div className="Experience-item">
        <p>{Information.experience[0].company}</p>
      </div>

      <div className="Experience-item">
        <p>{Information.experience[1].company}</p>
      </div>

      <div className="Experience-item">
        <p>{Information.experience[2].company}</p>
      </div>
    </div>
  );
}
