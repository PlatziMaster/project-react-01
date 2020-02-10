import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import ErrorMessage from '../components/ErrorMessage';

import '../styles/components/App.styl';

import getData from '../utils/getData';
import DataContext from '../contexts/DataContext';

const App = () => {
  const api = 'http://localhost:3000/data';

  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    getData(api)
      .then((res) => {
        setData(res);
        document.title = res.name;
      })
      .catch(err => setError(err));
  }, []);

  return (
    <DataContext.Provider
      value={{ data, loading: Object.keys(data).length === 0 }}
    >
      <ErrorMessage error={error} />
      <Header>
        <About />
      </Header>
      <Profile />
      <Experience />
      <Academic />
      <Skills />
      <Interest />
      <Languages />
    </DataContext.Provider>
  );
};

export default App;
