import React, { useEffect, useState } from 'react';
import '../styles/components/App.styl';
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
  const [profile, setProfile] = useState({});

  const fetchData = async () => {
    const data = await getData('http://localhost:3000/data');
    setProfile(await data.json());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header name={profile.name} avatar={profile.avatar}>
        <About
          profession={profile.profession}
          phone={profile.phone}
          email={profile.email}
          website={profile.website}
          address={profile.address}
        />
      </Header>
      <Profile desc={profile.Profile} />
      <Experience experience={profile.experience} />
      <Academic academic={profile.Academic} />
      <Skills skills={profile.skills} />
      <Interest interests={profile.interest} />
      <Languages languages={profile.languages} />
    </>
  );
};

export default App;
