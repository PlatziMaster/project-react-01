import React from 'react';
import '../styles/components/App.css';
import Header from '../__test__/components/Header';
import About from '../__test__/components/About';
import Profile from '../__test__/components/Profile';
import Experience from '../__test__/components/Experience';
import Academic from '../__test__/components/Academic';
import Skills from '../__test__/components/Skills';
import Interest from '../__test__/components/Interest';
import Languages from '../__test__/components/Languages';
import Certificate from '../__test__/components/certificate';
import useFetchData from '../../hook/useFetchApi';

const App = () => {
  const API = 'http://localhost:3000/data';
  const { avatar, name, profession, phone, email, website, address, profile, about, experience, academic, skills, interest, languages, certificate } = useFetchData(API);
  return (
    <>
      <Header
        avatar={avatar}
        name={name}
        profession={profession}
        phone={phone}
        email={email}
        website={website}
        address={address}
      />
      <About about={about} />
      <Profile profile={profile} />
      <div className='Home__container'>
        <Academic academic={academic} />
        <Experience experience={experience} />
        <Skills skills={skills} />
        <Interest interest={interest} />
        <Languages languages={languages} />
        <Certificate certificate={certificate} />
      </div>
    </>
  );
};

export default App;
