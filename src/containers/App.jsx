import React, { useState, useEffect } from 'react';
import '../styles/components/App.styl';
import Header from '../componets/Header';
import About from '../componets/About';
import Profile from '../componets/Profile';
import Experience from '../componets/Experience';
import Academic from '../componets/Academic';
import Skills from '../componets/Skill';
import Interest from '../componets/Interest';
import Languages from '../componets/Languages';
import getData from '../utils/getData';

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    getData('http://localhost:3000/data')
      .then(res => setData(res));
  }, []);

  return (
    <>
      <Header data={data} />
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
