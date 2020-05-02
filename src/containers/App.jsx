import React from 'react';
import useGetData from '../utils/getData';
import '../styles/components/App.styl';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

const App = () => {

  const API = 'http://localhost:3000/data';
  const state = useGetData(API);

  return (
    <>
      <div>
        <Header data={state} />
        <Profile data={state} />
        <Experience experience={state.experience} />
      </div>
      <div className='cards'>
        <Academic data={state.Academic} />
        <Skills data={state.skills} />
        <Interest data={state.interest} />
        <Languages data={state.languages} />
      </div>

    </>
  );
};

export default App;
