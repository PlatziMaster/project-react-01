import React, { useState, useEffect } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';

function getState(API) {
  const [dataState, setData] = useState([]);

  useEffect(() => {
    getData(API).then(data => setData(data));
  }, []);

  return dataState;
}

const App = () => {
  const API = 'http://localhost:3000/data';

  const dataCurriculum = getState(API);

  console.log(dataCurriculum);

  return (
    <>
      <Header name={dataCurriculum.name} avatar={dataCurriculum.avatar}>
        <About />
      </Header>
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
