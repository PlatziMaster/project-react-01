import React from 'react';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

const AcademicSkills = props => {
  return (
    <div className="Academic_Skills">
      <Interest {...props.interest} />
      <Languages {...props.languages} />
    </div>
  );
};

export default AcademicSkills;
