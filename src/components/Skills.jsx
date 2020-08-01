import React from 'react';

const Skills = ({ skills, theme }) => {
  const profileSkills =
    skills || Array(3).fill({ name: 'test', percentage: '100%' });

  const skillsList = profileSkills.map((skill, index) => (
    <li key={`${skill.name}-${index}`} className="Skills-item">
      {skill.name}: <span>{skill.percentage}</span>
    </li>
  ));

  return (
    <section>
      <div className="container">
        <div className="Skills">
          <h2 className="Skills-title">Skills</h2>
          <span className={`horizontal-line line-${theme}`}></span>
          <ul>{skillsList}</ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
