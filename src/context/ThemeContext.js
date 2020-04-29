import React, { useState, useLayoutEffect } from 'react';

const ThemeContext = React.createContext({
  dark: false,
  toggle: () => {},
});

export default ThemeContext;

export function ThemeProvider(props) {
  // keeps state of the current theme
  const [dark, setDark] = useState(false);

  // paints the app before it renders elements
  useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem('dark-mode');

    if (lastTheme === 'true') {
      setDark(true);
      //   applyTheme(darkTheme);
    } else {
      setDark(false);
      //   applyTheme(lightTheme);
    }
    // if state changes, repaints the app
  }, [dark]);

  const toggle = () => {
    setDark(!dark);
    window.localStorage.setItem('dark-mode', !dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggle,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
