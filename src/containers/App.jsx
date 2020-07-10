import React, { useState, useEffect } from 'react';
import '../styles/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Academic from '../components/Academic';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';

const App = () => {
  const API = 'http://localhost:3000/data';
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(API)
      .then(data => setData(data));
  }, []);

  if (data.skills === undefined) {
    return <h1>Loading..</h1>;
  }

  return (
    <>
      <Header>
        <About
          name={data.name}
          job={data.profession}
          phone={data.phone}
          email={data.email}
          picture={data.avatar}
          website={data.website}
          address={data.address}
        />
      </Header>
      <Profile
        description={data.Profile}
      />
      <Experience
        experiences={data.Experience}
      />

      <Academic
        academic={data.Academic}
      />
      <Skills
        skills={data.skills}
      />
      <Interest interest={data.interest} />
      <Languages languages={data.languages} />
    </>
  );
};

export default App;
