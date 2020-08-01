import React from 'react';

const Experience = ({ experience }) => {
  const profileExpirience =
    experience ||
    Array(3).fill({
      company: 'A company',
      endDate: 'Jan 2017',
      startDate: 'Jan 2018',
      jobDescription: 'lorem ipsum',
      jobTitle: 'title',
    });

  const experienceList = profileExpirience.map((exp, index) => (
    <li key={`${exp.company}-${index}`} className="Experience-item">
      {exp.company}/{exp.endDate}/{exp.jobDescription}/{exp.jobTitle}/
      {exp.startDate}
    </li>
  ));

  return (
    <section>
      <div className="container">
        <div className="Experience">
          <h1 className="Experience-title">Experience</h1>
          <div className="Experience-items">
            <ul>{experienceList}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
