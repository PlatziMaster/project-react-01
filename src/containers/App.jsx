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
import Socials from '../components/Socials';
import ButtonCircle from '../components/ButtonCircle';

const App = () => {
  const [profile, setProfile] = useState({});
  const [theme, setTheme] = useState('light');

  const fetchData = async () => {
    const data = await getData('http://localhost:3000/data');
    setProfile(await data.json());
  };

  const changeTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className={theme}>
      <Header name={profile.name} avatar={profile.avatar}>
        <ButtonCircle theme={theme} changeTheme={changeTheme} />
        <About
          profession={profile.profession}
          phone={profile.phone}
          email={profile.email}
          website={profile.website}
          address={profile.address}
        />
      </Header>
      <section>
        <div className="container">
          <div className="Page">
            <section className="Page-left">
              <Skills theme={theme} skills={profile.skills} />
              <Languages theme={theme} languages={profile.languages} />
              <Interest theme={theme} interests={profile.interest} />
              <Socials theme={theme} social={profile.social} />
            </section>
            <section className="Page-right">
              <Profile theme={theme} desc={profile.Profile} />
              <Experience theme={theme} experience={profile.experience} />
              <Academic theme={theme} academic={profile.Academic} />
            </section>
          </div>
        </div>
      </section>
    </section>
  );
};

export default App;
