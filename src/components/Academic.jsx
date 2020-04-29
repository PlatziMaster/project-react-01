import React, { useContext } from 'react';
import '../styles/components/Academic.styl';
import ThemeContext from '../context/ThemeContext';

const Academic = ({ title, academic = [] }) => {
  const { dark, toggle } = useContext(ThemeContext);
  return (
    <>
      <section className={dark ? 'academic' : 'dark-mode-academic'}>
        <h1>{title}</h1>
        <div className="academic-content">
          {academic.map(ac => (
            <div key={ac.degree}>
              <h3>{ac.degree}</h3>
              <p>{ac.description}</p>
              <span>{ac.institution} </span>
              <span>
                 {ac.startDate} to {ac.endDate}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Academic;