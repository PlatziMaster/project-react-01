import React, { useContext } from 'react';
import InformationContext from '../../data';

export default function Profile() {
  const Information = useContext(InformationContext);
  return (
    <div className="Profile containter">
      <div className="Profile-title">
        <h2> Profile </h2>
      </div>
      <div className="Profile-desc">
        <p>{Information.profile}</p>
      </div>
    </div>
  );
}
