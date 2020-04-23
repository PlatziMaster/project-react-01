import React, { useContext } from 'react';
import InformationContext from '../../data';

export default function Academic() {
  const Information = useContext(InformationContext);

  return (
    <div className="Academic containter">
      <div className="Academic-title">
        <h2>Academic</h2>
      </div>

      <div className="Academic-desc">
        <div className="Academic-item">
          <p>{Information.Academic[0].description}</p>
        </div>

        <div className="Academic-item">
          <p>{Information.Academic[1].description}</p>
        </div>

        <div className="Academic-item">
          <p>{Information.Academic[2].description}</p>
        </div>
      </div>
    </div>
  );
}
