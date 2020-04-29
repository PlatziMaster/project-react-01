import React from 'react';
import useGetData from '../utils/getData';
import '../styles/components/App.styl';
import Header from '../components/Header';
// import About from '../components/About';
// import Profile from '../components/Profile';
// import Experience from '../components/Experience';
// import Academic from '../components/Academic';
// import Skills from '../components/Skills';
// import Interest from '../components/Interest';
// import Languages from '../components/Languages';

const App = () => {

  const API = 'http://localhost:3000/data';
  const state = useGetData(API);
  console.log(imagen.data.avatar);
  console.log(state.avatar);
  return (
    <>
      <h1>{state.name}</h1>
      <Header />
      <img src={state.avatar} alt='nothing :(' />
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
