import React from 'react';
import getData from '../hooks/getData';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

import '../styles/components/App.styl';

const API = 'http://localhost:3000/data';

const App = () => {
  const information = getData(API);

  return information.length === 0 ? <h1>loadaing ..</h1> : (
    <>
      <Header {...information}>
        <About
          phone={information.phone}
          email={information.email}
          website={information.website}
        />
      </Header>
      <Profile
        profile={information.Profile}
      />
      { information.experience.map(item => <Experience key={item.company} {...item} />)}
      { information.Academic.map(item => <Academic key={item.institution} {...item} />)}
      { information.skills.map(item => <Skills key={item.name} {...item} />)}
      <Interest info={information.interest} />
      <Languages info={information.languages} />
    </>
  )
};

export default App;
