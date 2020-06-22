import React from 'react';
import '../styles/components/ExperienceItem.styl';

const ExperienceItem = ({
  jobTitle,
  jobDescription,
  company,
  endDate,
  startDate,
}) => (
  <div className="Experience-item">
    <h4>{`${company} - ${jobTitle}`}</h4>
    <span>{` ${startDate} - ${endDate} `}</span>
    <p>{jobDescription}</p>
  </div>
);

export default ExperienceItem;
