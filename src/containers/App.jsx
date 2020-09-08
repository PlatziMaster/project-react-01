import React, { useEffect, useState } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Social from '../components/Social';
import Interest from '../components/Interest';
import Certificate from '../components/Certificate';
import Languages from '../components/Languages';
import getData from '../utils/getData';

const App = () => {
  const API = 'http://localhost:3000/data';
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(API).then(data => setData(data));
  }, []);

  return data.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <Header
        name={data.name}
        profession={data.profession}
        avatar={data.avatar}
      />
      <Profile profile={data.Profile} />
      <div className="container">
        <Academic academic={data.Academic} />
        <Experience experience={data.experience} />
        <div className="divider">
          <Skills skills={data.skills} />
          <Languages languages={data.languages} />
          <Interest interest={data.interest} />
        </div>
        <Certificate certificate={data.certificate} />
        <Social social={data.social} />
        <About />
      </div>
    </>
  );
};

export default App;
