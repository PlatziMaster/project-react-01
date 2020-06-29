import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { backgroundColor, textColor } from './theme';

const ThemeToggleContext = React.createContext();

export const useTheme = () => React.useContext(ThemeToggleContext);

export const MyThemeProvider = ({ children }) => {
  //?estado del tema
  const [themeState, setThemeState] = React.useState({
    mode: 'light',
  });
  //? styled componente de Wapper
  const Wrapper = styled.div`
    background-color: ${backgroundColor};
    color: ${textColor};
  `;
  //?toggle
  const toggle = () => {
    const mode = (themeState.mode === 'light' ? 'dark' : 'light');
    setThemeState({ mode });
  };

  //retunr

  return (
    <ThemeToggleContext.Provider value={{ toggle }}>
      <ThemeProvider
        theme={{
          mode: themeState.mode,
        }}
      >
        <Wrapper>
          {children}
        </Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );

};
