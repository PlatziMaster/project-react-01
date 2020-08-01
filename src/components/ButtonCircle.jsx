import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ButtonCircle = ({ changeTheme, theme }) => {
  const getIcon = () => {
    if (theme === 'dark') return faSun;
    return faMoon;
  };

  return (
    <button onClick={changeTheme} className={`Button-circle btn-${theme}`}>
      <FontAwesomeIcon icon={getIcon()} />
    </button>
  );
};

export default ButtonCircle;
