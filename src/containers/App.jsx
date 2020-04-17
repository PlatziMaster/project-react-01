import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import data from '../../data.json';
import getData from '../utils/getData';
import '../styles/App.styl';

const App = () => {

/*   const API = 'http://localhost:3000/data';
  const [info, setInfo] = useState({});

  useEffect(() => {
    getData(API)
      .then((data) => setInfo(data))
  }, []) */
  
  const info = data.data

  return (
    <>
      <Header title={String(info.name).toUpperCase()} img={info.avatar} >
        <About
          title={info.profession}
          phone={info.phone}
          address={info.address}
          email={info.email}
          website={info.website}
        />
      </Header>
      <Profile title='Profile' description={info.Profile} />
      <Experience title='Experence' items={info.experience} />
      <Academic title='Academic' items={info.Academic} />
      <Skills title='Skills' items={info.skills} />
      <Languages title='Languages' items={info.languages} />
      <Interest title='Interest' items={info.interest} />
    </>
  )
};

export default App;
