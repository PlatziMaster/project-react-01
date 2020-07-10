import React from 'react';
import '../styles/components/ExperienceItem.styl';

const ExperienceItem = ({ company, endDate, startDate, description, title, className }) => {
  return (
    <div className={className}>
      <p>
        Company:
        <span>{company}</span>
      </p>
      <p>
        Start date:
        <span>{startDate}</span>
      </p>
      <p>
        End Date:
        <span>{endDate}</span>
      </p>
      <p>
        Description:
        <span>{description}</span>
      </p>
      <p>
        Title:
        <span>{title}</span>
      </p>
    </div>
  );
};

export default ExperienceItem;
