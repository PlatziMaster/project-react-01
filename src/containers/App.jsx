import React, { useEffect, useState } from 'react';
import '../styles/Reset.styl';
import '../styles/Vars.styl';
import '../styles/components/Main.styl';
import '../styles/components/Content.styl';
import Header from '../components/Header';
import About from '../components/About';
import Aside from '../components/Aside';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import getData from '../utils/getData';

const API_URL = 'http://localhost:3000/data';
const App = () => {

  const [data, setData] = useState({
    proyectosPersonales: [
      {},
      {},
    ],
    skills: [],
    interest: [],
    social: [],
  });

  useEffect(() => {

    const fetch = async () => {
      const result = await getData(API_URL);
      setData(result);
    };
    fetch();
  }, []);

  return (
    <main className='Main'>
      <Aside>
        <Header {...data} />
        <About {...data} />
      </Aside>
      <section className='Content'>
        <Profile {...data} />
        <Experience {...data} />
        <Skills {...data} />
        <Interest {...data} />
      </section>
    </main>
  );
};

export default App;
