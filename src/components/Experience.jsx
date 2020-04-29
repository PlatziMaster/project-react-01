import React, { useContext } from 'react';
import '../styles/components/Experience.styl';
import ThemeContext from '../context/ThemeContext';

const Experience = ({ title, experience = [] }) => {
  const { dark, toggle } = useContext(ThemeContext);

  return (
    <>
      <section className={dark ? 'experience' : 'dark-mode-experience'}>
        <h2>{title}</h2>
        {experience.map(xp => (
          <div key={xp.company} className={dark ? 'experience-content' : 'dark-mode-experience--content'}>
            <h3>{xp.company}</h3>
            <p>{xp.jobTitle}</p>
            <p>{xp.jobDescription}</p>
            <span>
              {xp.startDate} - {xp.endDate}
            </span>
          </div>
        ))}
      </section>
    </>
  );
};

export default Experience;
