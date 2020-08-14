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

function getState(_URL) {
  const [state, setState] = useState([]);

  useEffect(() => {
    getData(_URL)
      .then(initialState => setState(initialState));
  }, []);

  return state;
};

const App = () => {
  const URL = 'http://localhost:3000/data';
  const state = getState(URL);
  return (
    <>
      <Header title='Currículum Vitae'>
        <About
          name={state.name}
          profession={state.profession}
          phone={state.phone}
          email={state.email}
          website={state.website}
          address={state.address}
        />
      </Header>
      <Profile
        title='About me'
        profile={state.Profile}
        social={state.social}
      />
      <Experience title='Experience' experience={state.experience} />
      <Academic title='Academic' academic={state.Academic} />
      <Skills title='Skills' skills={state.skills} />
      <Interest title='Interest' interest={state.interest} />
      <Languages title='Languages' languages={state.languages} />
    </>
  );
};

export default App;
