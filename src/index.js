import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { MyThemeProvider } from './utils/ThemeContext';
import i18n from './config/i18n';
import App from './containers/App';

ReactDOM.render(
  <MyThemeProvider>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </MyThemeProvider>
  , document.getElementById('app'),
);
