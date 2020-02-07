import React, { Fragment, useState, useEffect } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import AcademicSkills from '../components/AcademicSkills';
import AcademicSkillsTwo from '../components/AcademicSkillsTwo';
import getData from '../utils/getData';

const App = () => {
  const [data, setState] = useState({ info: [] });
  const [experience, setExperience] = useState({ main: [] });
  const [academic, academicSkill] = useState({ main: [] });
  const [interests, setInterests] = useState({ interests: [] });
  const initialState = getData('http://localhost:3000/data');

  useEffect(() => {
    initialState.then(data => {
      setState(data);
      setExperience(data.experience);
      academicSkill(data);
      setInterests(data);
    });
  }, []);

  return (
    <Fragment>
      <Header info={data}>
        <About />
      </Header>
      <Profile info={data} />
      <Experience {...experience} />
      <AcademicSkills {...academic} />
      <AcademicSkillsTwo {...interests} />
    </Fragment>
  );
};

export default App;
