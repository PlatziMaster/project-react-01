import React, { useContext } from 'react';
import InformationContext from '../../data';

export default function Interest() {
  const information = useContext(InformationContext);

  return (
    <div className="Interest containter">
      <div className="Interest-title">
        <h2>Interest</h2>
      </div>
      {information.interest.map(like => {
        return (
          <div key={like.name} className="Interest-item">
            <p>{like.name}</p>
          </div>
        );
      })}
    </div>
  );
}
