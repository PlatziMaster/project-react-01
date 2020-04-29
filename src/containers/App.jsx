import React, { useState, useEffect, useContext } from 'react';
import '../styles/components/App.styl';
import ThemeContext from '../context/ThemeContext';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interests from '../components/Interest';
import Languages from '../components/Languages';
import Switch from '../components/Switch'

import getData from '../utils/getData';
const API = 'http://localhost:3000/data';

const App = () => {
  const [info, setInfo] = useState({});
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    (async function fetchData() {
      const fetchData = await getData(API);
      setInfo(fetchData);
    })();
  }, []);

  const { name, profession, address, email, website, phone, avatar } = info;

  const dataAbout = {
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
      <div className={dark ? 'App' : 'App-dark-mode'}>
        <Header img={info.avatar}>
          <About about={dataAbout} />
          <Switch />
        </Header>
        <Profile title="About me" description={info.profile} />
        <Experience title="My Experience" experience={info.experience} />
        <Academic title="Academic" academic={info.academic} />
        <Skills title="Skills" skills={info.skills} />
        <Interests title="Interest" interest={info.interest} />
        <Languages title="Languages" languages={info.languages} />
      </div>
    </>
  );
};

export default App;