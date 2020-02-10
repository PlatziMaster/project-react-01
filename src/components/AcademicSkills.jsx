import React from 'react';
import Academic from './Academic';
import Skills from './Skills';

const AcademicSkills = props => {
  return (
    <div className="Academic_Skills">
      <Academic {...props.Academic} />
      <Skills {...props.skills} />
    </div>
  );
};

export default AcademicSkills;
