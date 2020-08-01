import React from 'react';

const Skills = ({ skills }) => {
  const profileSkills =
    skills || Array(3).fill({ name: 'test', percentage: '100%' });

  const skillsList = profileSkills.map((skill, index) => (
    <li key={`${skill.name}-${index}`} className="Skills-item">
      {skill.name}:{skill.percentage}
    </li>
  ));

  return (
    <section>
      <div className="container">
        <div className="Skills">
          <h1 className="Skills-title">Skills</h1>

          <ul>{skillsList}</ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
