import React from 'react';
import ReactDOM from 'react-dom';
import { MyThemeProvider } from './utils/ThemeContext';

import App from './containers/App';

ReactDOM.render(
  <MyThemeProvider>
    <App />
  </MyThemeProvider>
  , document.getElementById('app'),
);
