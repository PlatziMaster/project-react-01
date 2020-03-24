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

const App = () => {
  return (
    <div className='main-grid'>
      <div className='item1'>
        <Header>
          <About />
        </Header>
      </div>
      <div className='item2'>
        <Profile />
      </div>
      <div className='item3'>
        <Experience />
      </div>
      <div className='item4'>
        <Academic />
      </div>
      <div className='item5'>
        <Skills />
      </div>
      <div className='item6'>
        <Interest />
      </div>
      <div className='item7'>
        <Languages />
      </div>
    </div>
  );
};

export default App;
