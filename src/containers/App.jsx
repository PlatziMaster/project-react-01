import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Profile from './Profile';
/*
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
 */
const App = () => {
  return (
    <>
      <Header />
      <About />
      <Profile />
      {/*
      <Experience />
      <Academic />
      <Interest />
      <Languages /> */}
    </>
  );
};

export default App;
