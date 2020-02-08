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
import Social from '../components/Social';
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
  const _URL = 'http://localhost:3000/data';

  const state = getState(_URL);

  return (
    <>
      <Header avatar={state.avatar} />
      <About
        name={state.name}
        profession={state.profession}
        phone={state.phone}
        email={state.email}
        website={state.website}
        address={state.address}
      />
      <Profile
        profile={state.Profile}
        profession={state.profession}
      />
      <Experience experience={state.experience} />
      <Academic academic={state.Academic} />
      <Skills skills={state.skills} />
      <Languages languages={state.languages} />
      <Interest interest={state.interest} />
      <Social social={state.social} />
    </>
  );
};

export default App;
