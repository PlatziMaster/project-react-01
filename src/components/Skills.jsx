import React, { useContext } from 'react';
import '../styles/components/Skills.styl';
import ThemeContext from '../context/ThemeContext';

const Skills = ({ title, skills = [] }) => {
  const { dark, toggle } = useContext(ThemeContext);

  return (
    <>
      <section className={dark ? 'skills' : 'dark-mode-skills'}>
        <h2>{title}</h2>
        {skills.map(sk => (
          <div key={sk.name} className="skills-content">
            <p>{sk.name}</p>
            <i><img src={sk.image} alt={sk.name}/></i>
          </div>
        ))}
      </section>
    </>
  );
};

export default Skills;
