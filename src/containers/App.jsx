import React from 'react';
import '../styles/components/App.styl';
import Header from '../componets/Header';
import About from '../componets/About';
import Profile from '../componets/Profile';
import Experience from '../componets/Experience';
import Academic from '../componets/Academic';
import Skills from '../componets/Skill';
import Interest from '../componets/Interest';
import Languages from '../componets/Languages';

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Profile />
      <Experience />
      <Academic />
      <Skills />
      <Interest />
      <Languages />
    </>
  );
};

export default App;
