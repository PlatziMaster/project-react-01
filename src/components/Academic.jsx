import React, { useState, useEffect } from 'react';
import '../styles/components/Academic.styl';
import { _academic_ } from '../__mocks__/styleMock';

const Academic = (props) => {
  const [academic, setAcademic] = useState(_academic_);

  useEffect(() => {
    if (Object.keys(props).length > 0) {
      setAcademic(props.Academic);
    }
  });

  return (
    <div className="Academic section-short">
      <div className="Academic-title">Academic</div>
      <div className="Academic-items">
        {academic.map((item, index) => (
          <div key={item.degree} className="Academic-item">
            <div className="Academic-item__degree">{item.degree}</div>
            <div className="Academic-item__institution">{item.institution}</div>
            <div className="Academic-item__dates">{item.endDate}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academic;
