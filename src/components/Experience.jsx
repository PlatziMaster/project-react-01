import React, { useContext } from 'react';
import InformationContext from '../../data';

export default function Experience() {
  const Information = useContext(InformationContext);

  return (
    <div className="Experience containter">
      <div className="Experience-title">
        <h2>Lorem, ipsum dolor sit</h2>
      </div>
      <div className="Experience-item">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          consectetur
        </p>
      </div>
      <div className="Experience-item">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          consectetur
        </p>
      </div>
      <div className="Experience-item">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          consectetur
        </p>
      </div>
      <div className="Experience-item">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          consectetur
        </p>
      </div>
    </div>
  );
}
