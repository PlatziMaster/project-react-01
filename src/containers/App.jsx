import React from 'react';
import Header from '../components/Header.jsx';
import About from '../components/About.jsx';
import Profile from '../components/Profile.jsx';
import Experience from '../components/Experience.jsx';
import Academic from '../components/Academic.jsx';
import Skills from '../components/Skills.jsx';
import Interest from '../components/Interest.jsx';
import Languages from '../components/Languages.jsx';
import useGetData from '../hooks/useGetData';

import '../styles/components/App.styl';

const DATA_URL = 'http://localhost:3000/data/';

const App = () => {
  const info = useGetData(DATA_URL)
  return (
    <div className='Container'>
      <Header
        name={info.name}
        profession={info.profession}
        avatar={info.avatar}
      >
        <About
          phone={info.phone}
          email={info.email}
          website={info.website}
          address={info.address}
        />
      </Header>

      <Profile profile={info.profile} />
      <Experience itemsArray={info.experience} />

      <Academic itemsArray={info.academic} />
      <Skills itemsArray={info.skills} />
      <Interest itemsArray={info.interest} />
      <Languages itemsArray={info.languages} />
    </div>
  );
};

export default App;
