import React from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skill';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import InformationContext, { Information } from '../../data';

const App = () => {
  return (
    <InformationContext.Provider value={Information.data}>
      <Header />
      <About />
      <Profile />
      <Experience />
      <div className="cuatro">
        <Academic />
        <Skills />
        <Interest />
        <Languages />
      </div>
    </InformationContext.Provider>
  );
};

export default App;
