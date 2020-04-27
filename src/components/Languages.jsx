import React, { useContext } from 'react';
import '../styles/components/Languages.styl';
import ThemeContext from '../context/ThemeContext';

const Languages = ({ title, languages = [] }) => {
  const { dark, toggle } = useContext(ThemeContext);

  return (
    <>
      <section className={dark ? 'languages' : 'dark-mode-languages'}>
        <h1>{title}</h1>
        <div className="languages-content">
          {languages.map(lang => (
            <p key={lang.name}>{lang.name}</p>
          ))}
        </div>
      </section>
    </>
  );
};

export default Languages;