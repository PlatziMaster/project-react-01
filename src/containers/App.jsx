// import React from 'react';
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
import Social from '../components/Social'
import useData from '../hooks/useData'

const API = 'http://localhost:3000/data'

const App = () => {
  const data = useData(API)

  return (
    <React.Fragment>
      <Header avatar={`../src/assets/static/${data.avatar}`} >
        <About
          name={data.name}
          jobTitle={data.profession}
          phoneNumber={data.phone}
          email={data.email}
          website={data.website}
          address={data.address}
        />
      </Header>
      <Profile description={data.Profile} />
      <Academic academic={data.Academic} />
      <Experience experience={data.experience} />
      <Skills skills={data.skills} />
      <Interest hobbies={data.interest} />
      <Languages languages={data.languages} />
      <Social social={data.social} />
    </React.Fragment>
  );
};

export default App;
