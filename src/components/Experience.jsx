import React from 'react';
import CardAcademic from './CardAcademic';
import '../styles/components/Experience.styl';

const Experience = ({ experience }) => {
  const renderExperience = () => {
    if (experience.lenght === 0) return (<h3>Sin experiencia</h3>);
    return experience.map((exp, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className='Experience-item' key={idx}>
        <CardAcademic
          title={exp.jobTitle}
          startDate={exp.startDate}
          endDate={exp.endDate}
          institution={exp.company}
          description={exp.jobDescription}
        />
      </div>
    ));
  };

  return (
    <div className='Experience'>
      <div className='Experience-container container'>
        <h1 className='Experience-title'>Experiencia</h1>
        <div className='Experience-item-container'>
          {renderExperience()}
        </div>
      </div>
    </div>
  );
};

export default Experience;
