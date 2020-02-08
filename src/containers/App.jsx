import React, { useState, useEffect } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Certificate from '../components/Certificate';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

import getData from '../utils/getData';

const App = () => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    (async function fetchData() {
      const dataFetch = await getData('http://localhost:3000/data');
      setInfo(dataFetch);
    })();
  }, []);

  const { name, profession, address, email, website, phone, avatar } = info;

  const dataHeader = {
    name,
    profession,
    address,
    email,
    website,
    phone,
    avatar,
  };

  return (
    <>
      <Header data={dataHeader}>
        <About about={info.social} />
      </Header>
      <Profile description={info.Profile} />
      <Certificate certificate={info.certificate} />
      <Experience experience={info.experience} />
      <Academic academic={info.Academic} />
      <Skills skills={info.skills} />
      <Interest interest={info.interest} />
      <Languages languages={info.languages} />
    </>
  );
};

export default App;
