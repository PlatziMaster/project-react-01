import React, { useState, useEffect } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import ExperienceItem from '../components/ExperienceItem';
import Academic from '../components/Academic';
import AcademicItem from '../components/AcademicItem';
import Skills from '../components/Skills';
import SkillsItem from '../components/SkillsItem';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

import '../styles/base.styl';
import '../styles/mediaquerys.styl';
import '../styles/components/App.styl';
import useGetInfo from '../hooks/useGetInfo';
const API = 'http://localhost:3000/data';

const App = () => {
  const data = useGetInfo(API);
  return (
    <div className="resume">
      <Header>{<About {...data} />}</Header>
      <Profile {...data} />
      <Experience>
        {data.experience?.map(item => (
          <ExperienceItem key={item.id} {...item} />
        ))}
      </Experience>
      <Academic>
        {data.Academic?.map(item => (
          <AcademicItem key={item.id} {...item} />
        ))}
      </Academic>
      <Skills>
        <SkillsItem />
        <SkillsItem />
        <SkillsItem />
        {data.skills?.map(item => (
          <SkillsItem key={item.name} {...item} />
        ))}
      </Skills>
      <Interest {...data} />
      <Languages {...data} />
    </div>
  );
};

export default App;
