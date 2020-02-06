import React from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import Social from '../components/Social';

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Profile />
      <Experience />
      <Academic />
      <Skills />
      <Languages />
      <Interest />
      <Social />
    </>
  );
};

export default App;
