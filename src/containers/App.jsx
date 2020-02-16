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
import getData from '../utils/getData';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData('http://localhost:3000/data')
      .then(res => setData(res));
  }, []);

  return (
    <>
      <Header
        name={data.name}
        profession={data.profession}
        address={data.address}
        email={data.email}
        website={data.website}
        phone={data.phone}
        avatar={data.avatar}
      >
        <About />
      </Header>
      <Profile profile={data.Profile} />
      <Experience experience={data.experience} />
      <div className='Curriculum-skills'>
        <Academic academic={data.Academic} />
        <Skills skills={data.skills} />
        <Interest interest={data.interest} />
        <Languages languages={data.languages} />
      </div>
    </>
  );
};

export default App;
