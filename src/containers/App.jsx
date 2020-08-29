import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import useFetchData from '../hooks/useFetchApi';

import '../styles/components/App.styl';


const App = () => {
  const API = 'http://localhost:3001/data/';
  // Header
  const { avatar, name, profession, phone, email, website, address, profile, experience, academic, skills, interest, languages } = useFetchData(API);

  return (
    <>
      <Header avatar={avatar} name={name} >
        <About          
          name={name}
          profession={profession}
          phone={phone}
          email={email}
          website={website}
          address={address} 
        />
      </Header>
      <Profile profile={profile} />
      <Experience experience={experience} />
      <Academic academic={academic} />
      <Skills skills={skills} />
      <Interest interest={interest}/>
      <Languages languages={languages} />
    </>
  )
};

export default App;
