import React, { useContext } from 'react';
import InformationContext from '../../data';

export default function Skill() {
  const Information = useContext(InformationContext);
  return (
    <div className="Skills containter">
      <div className="Skills-title">
        <h2>Lorem ipsum dolor sit amet consectetur</h2>
      </div>
      <div className="Skills-item">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          aliquid facilis eos beatae. Quis, illum debitis illo reiciendis id,
          unde soluta asperiores praesentium, in error quibusdam. Fuga
          temporibus cum similique.
        </p>
      </div>
      <div className="Skills-item">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          aliquid facilis eos beatae. Quis, illum debitis illo reiciendis id,
          unde soluta asperiores praesentium, in error quibusdam. Fuga
          temporibus cum similique.
        </p>
      </div>
      <div className="Skills-item">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          aliquid facilis eos beatae. Quis, illum debitis illo reiciendis id,
          unde soluta asperiores praesentium, in error quibusdam. Fuga
          temporibus cum similique.
        </p>
      </div>
    </div>
  );
}
