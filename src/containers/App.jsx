import React, { useState } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import isEmpty from '../utils/isEmpty';
import getData from '../utils/getData';

const App = () => {
  const [info, setInfo] = useState({});

  if (isEmpty(info)) {
    getData('http://localhost:3000/data')
      .then(res => setInfo(res));
  }

  return (
    <>
      <Header
        title={info.name}
        job={info.profession}
      >
        <About
          social={info.social}
          website={info.website}
        />
      </Header>
      <Profile excerpt={info.Profile} />
      <Experience experience={info.experience} />
      <div className="container-two">
        <Academic academics={info.Academic} />
        <Skills skills={info.skills} />
      </div>
      <div className="container-two">
        <Interest interests={info.interest} />
        <Languages languages={info.languages} />
      </div>
      {/* <Interest /> */}
      {/* <Languages /> */}
    </>
  )
};

export default App;
