import React, { useContext } from 'react';
import InformationContext from '../../data';

export default function Experience() {
  const Information = useContext(InformationContext);

  return (
    <div className='Experience containter'>
      <div className="Experience-title">
        <h2>Experiencia</h2>
      </div>

      <div className="Experience-item">
        <p>{Information.experience[0].company}</p>
        <p>{Information.experience[0].startDate}</p>
        <p>{Information.experience[0].endDate}</p>
        <p>{Information.experience[0].jobTitle}</p>
        <p>{Information.experience[0].jobDescription}</p>
      </div>

      <div className="Experience-item">
        <p>{Information.experience[1].company}</p>
        <p>{Information.experience[1].startDate}</p>
        <p>{Information.experience[1].endDate}</p>
        <p>{Information.experience[1].jobTitle}</p>
        <p>{Information.experience[1].jobDescription}</p>
      </div>

      <div className="Experience-item">
        <p>{Information.experience[2].company}</p>
        <p>{Information.experience[2].startDate}</p>
        <p>{Information.experience[2].endDate}</p>
        <p>{Information.experience[2].jobTitle}</p>
        <p>{Information.experience[2].jobDescription}</p>
      </div>
    </div>
  );
}
