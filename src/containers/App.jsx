import React from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interests from '../components/Interest'
import Languages from '../components/Languages';

import getData from '../utils/getData';
const API = 'http://localhost:3000/data';

const App = () => {
  const info = getData(API);
  return info.length === 0 ? (
    <h1>loading...</h1>
  ) : (
    <>
      <div className="App">
        {[1, 2, 3].map(data => (
          <Header {...data}>
            <About {...data} />
          </Header>
        ))}
        <Profile {...data}/>
        <Experience {...data}/>
        <Academic {...data}/>
        <Skills {...data}/>
        <Interests {...data}/>
        <Languages {...data}/>
      </div>
    </>
  );
};

export default App;
