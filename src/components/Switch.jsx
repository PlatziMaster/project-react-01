import React, { useContext } from 'react';
import '../styles/components/Switch.styl'
import ThemeContext from '../context/ThemeContext';

export default function Switch () {
  const { dark, toggle } = useContext(ThemeContext);
  
  return (
    <button
      className={dark ? 'Switch' : 'Switch-dark-mode'}
      onClick={() => toggle()}
    >
    {dark ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
}