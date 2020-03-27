import React, { useContext } from 'react';
import InformationContext from '../../data';

export default function Languages() {
  const Information = useContext(InformationContext);
  return (
    <div className="languages containter">
      <div className="Languages-title">
        <h2>Lorem, ipsum dolor sit</h2>
      </div>
      <div className="Languages-item">
        <p>{Information.languages[0].name}</p>
      </div>
      <div className="Languages-item">
        <p>{Information.languages[1].name}</p>
      </div>
      <div className="Languages-item">
        <p>{Information.languages[2].name}</p>
      </div>
    </div>
  );
}
