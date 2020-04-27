import React, { useContext } from 'react';
import '../styles/components/Interest.styl';
import ThemeContext from '../context/ThemeContext';

const Interest = ({ title, interest = [] }) => {
  const { dark, toggle } = useContext(ThemeContext);

  return (
    <>
    <section className={dark ? 'interests' : 'dark-mode-interests'}>
      <h1>{title}</h1>
      <div className="interests-content">
        {interest.map(item => (
          <h4 key={item} >
            {item}
          </h4>
        ))}
      </div>
    </section>
    </>
  );
};

export default Interest;