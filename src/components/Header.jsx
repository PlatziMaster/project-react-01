import React, { useContext } from 'react';
import InformationContext from '../../data';

export default function Header() {
  const Information = useContext(InformationContext);

  return (
    <div className="Header containter">
      <div className="Header-img">
        <img src={Information.avatar} alt={Information.name} />
      </div>
      <div className="Header__content">
        <div className="Header-title">
          <h1>{Information.name}</h1>
        </div>
        <div className="Header-job-title">
          <h3>{Information.profession}</h3>
        </div>
      </div>
    </div>
  );
}
