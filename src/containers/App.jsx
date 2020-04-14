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
import '../styles/App.styl';

const App = () => {

  const API = 'http://localhost:3000/data';
  const [info, setInfo] = useState({});

  useEffect(() => {
    getData(API)
      .then((data) => setInfo(data))
  }, [])
  
  return (
    <>
      <Header title={info.name} img={info.avatar} >
        <About
          title={info.profession}
          phone={info.phone}
          address={info.address}
          email={info.email}
          website={info.website}
        />
      </Header>
      <Profile title='Profile' description={info.Profile} />
      <Experience title='Experience' items={info.experience} />
      <Academic title='Academic' items={info.Academic} />
      <Skills title='skills' items={info.skills} />
      <Interest title='interest' items={info.interest} />
      <Languages title='languages' items={info.languages} />
    </>
  )
};

export default App;
