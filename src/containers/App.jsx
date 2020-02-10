import React, { useState } from 'react';
import '../styles/containers/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';

const App = () => {
  const [info, setInfo] = useState(false);
  if (!info) {
    getData('http://localhost:3000/data')
      .then(data => setInfo(data))
      .catch(() => setInfo({
        error: true,
        message: 'Ups! Algo salio mal',
      }));
  }

  if (!info) return (<div>Cargando</div>);
  if (info.error) return (<div>{info.message}</div>);
  return (
    <>
      <Header img={info.avatar} name={info.name}>
        <About profession={info.profession} phone={info.phone} email={info.email} website={info.website} address={info.address}/>
      </Header>
      <Profile profile={info.Profile} />
      <Experience experience={info.experience} />
      <Academic academic={info.Academic} />
      <Skills skills={info.skills} />
      <Interest interest={info.interest} />
      <Languages languages={info.languages} />
    </>
  );
};

export default App;
