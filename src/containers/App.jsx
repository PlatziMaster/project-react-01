import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';

import '../styles/components/App.styl';

function useData(_URL) {
  const [state, setState] = useState([]);

  useEffect(() => {
    getData(_URL).then(response => setState(response));
  }, []);
  return state;
}

const App = () => {
  const data = useData('http://localhost:3000/data');

  return (
    <>
      <Header avatar={data.avatar}>
        <About
          name={data.name}
          profession={data.profession}
          address={data.address}
          email={data.email}
          website={data.email}
          phone={data.phone}
        />
      </Header>
      <Profile info={data.Profile} />
      <Experience info={data.experience} />
      <section>
        <Academic courses={data.Academic} />
        <Skills skills={data.skills} />
        <Interest hobbies={data.interest} />
        <Languages languages={data.languages} />
      </section>
    </>
  );
};

export default App;
