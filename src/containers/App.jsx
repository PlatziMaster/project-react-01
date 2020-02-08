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
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/data';

const App = () => {
  const data = useInitialState(API);

  return (
    <div className="container">
      <Header>
        <About {...data} />
      </Header>
      <Profile {...data} />
      <Experience {...data} />
      <Academic {...data} />
      <Skills {...data} />
      <Interest {...data} />
      <Languages {...data} />
    </div>
  );
};

export default App;
