import React from 'react';
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

const API = 'http://localhost:3000/data';

const App = () => {
  const data = getData(API);
  return data.length === 0 ? <h1>Loading...</h1> :
  (
    <>
      <Header name={data.name} img={data.avatar} job={data.profession}>
        <About phone={data.phone} email={data.email} website={data.website} address={data.address} />
      </Header>
      <Profile profile={data.Profile} />
      <Experience experience={data.experience} />
      <div className="container">
        <Academic academic={data.Academic} />
        <Skills skills={data.skills} />
      </div>
      <div className="container">
        <Interest interest={data.interest} />
        <Languages languages={data.languages} />
      </div>
    </>
  )
};

export default App;
