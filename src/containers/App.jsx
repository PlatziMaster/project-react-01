import React, { useState, useEffect } from 'react';
import '../styles/components/App.css';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

const API = 'http://localhost:3000/data';

const App = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const state = data;
  const { experience, academic, skills, interest, languages } = state;
  return (
    <>
      <Header {...state}>
        <About />
      </Header>
      <Profile {...state} />
      {experience !== undefined &&
        <Experience {...experience} />
      }
      {academic !== undefined &&
        <Academic {...academic} />
      }
      {skills !== undefined &&
      <Skills {...skills} />
      }
      {interest !== undefined &&
      <Interest {...state} />
      }
      {languages !== undefined &&
      <Languages {...languages} />
      }
    </>
  );
};

export default App;
