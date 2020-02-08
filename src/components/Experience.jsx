import React, { useState, useEffect } from 'react';
import '../styles/components/Experience.styl';
import { _experience_ } from '../__mocks__/styleMock';

const Experience = (props) => {
  const [experience, setExperience] = useState(_experience_);

  useEffect(() => {
    if (Object.keys(props).length > 0) {
      setExperience(props.experience);
    }
  });
  return (
    <div className="Experience section">
      <div className="Experience-title">Experience</div>
      <div className="Experience-items">
        {experience.map((item, index) => (
          <div key={item.company} className="Experience-item">
            <div className="Experience-item__company">{item.company}</div>
            <div className="Experience-item__jobTitle">{item.jobTitle}</div>
            <div className="Experience-item__dates">{`${item.startDate} - ${item.endDate}`}</div>
            <div className="Experience-item__desc">{item.jobDescription}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
