import React, { useState, useEffect } from 'react';
import getData from '../utils/getData';
import '../styles/components/App.styl';
import Header from '../components/Header';
// import About from '../components/About';
// import Profile from '../components/Profile';
// import Experience from '../components/Experience';
// import Academic from '../components/Academic';
// import Skills from '../components/Skills';
// import Interest from '../components/Interest';
// import Languages from '../components/Languages';

const getState = (url) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const initialState = getData(url);
    setState(initialState);
  }, []);

  return state;
};

const App = () => {

  const URL = 'http://localhost:3000/data';
  const state = getState(URL);

  return (
    <>
      <div>hola</div>
      <Header avatar={state.avatar} />
       {/* <About />
      <Profile />
      <Experience />
      <Academic />
      <Skills />
      <Interest />
      <Languages /> */}
    </>
  );
};

export default App;
