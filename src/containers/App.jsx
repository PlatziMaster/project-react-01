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
import getData from '../utils/getData'

function useData(_URL) {
  const [state, setState] = useState([]);

  useEffect(() => {
    getData(_URL).then(response => setState(response));
  }, []);
  return state;
}

const App = () => {
  const data = useData('http://localhost:3000/data')
  console.log('data::', data)
  return (
    <>
      <Header>
        <About />
      </Header>
      <Profile />
      <Experience />
      <div className="wrap-container">
        <Academic />
        <Skills />
      </div>
      <Interest />
      <Languages />
    </>
  )
};

export default App;
