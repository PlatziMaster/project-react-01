import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import '../styles/components/App.styl';
import AppEs from './App1';
import AppEn from './App2';
import { ThemeProvider } from '../components/ThemeContext';

const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={AppEs} />
        <Route exact path='/en' component={AppEn} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
