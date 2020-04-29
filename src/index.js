import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './context/ThemeContext';
import App from './containers/App';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('app'),
);
