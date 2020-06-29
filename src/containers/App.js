/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled, { withTheme } from 'styled-components';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import useGetData from '../hooks/useGetData';

import { useTheme } from '../utils/ThemeContext';
import { buttonBackgroundColor, buttonTextColor } from '../utils/theme';

import '../styles/components/App.styl';
//TODO cambiar los datos del json server
const DATA_URL = 'http://localhost:3000E/data/';

const App = (props) => {
  const themeToggle = useTheme();

  const info = useGetData(DATA_URL);

  const Button = styled.button`
    background: ${buttonBackgroundColor};
    border: none;
    border-radius: 0.3em;
    box-shadow: none;
    color: ${buttonTextColor};
    cursor: pointer;
    font-size: 1em;
    padding: 0.5em 1em;
  `;

  return (
    <div className='body'>
      <Button onClick={() => themeToggle.toggle()}>
        {props.theme.mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </Button>
      <div className='Container'>
        <Header
          name={info.name}
          profession={info.profession}
          avatar={info.avatar}
        >
          <About
            section={info.section.contacto}
            phone={info.phone}
            email={info.email}
            website={info.website}
            address={info.address}
          />
        </Header>

        <Profile
          section={info.section.perfil}
          profile={info.profile}
        />
        <Experience
          section={info.section.experiencia}
          itemsArray={info.experience}
        />

        <Academic
          itemsArray={info.academic}
          section={info.section.educacion}
        />

        <Skills
          itemsArray={info.skills}
          section={info.section.habilidades}
        />
        <Interest
          itemsArray={info.interest}
          section={info.section.intereses}
        />
        <Languages
          itemsArray={info.languages}
          section={info.section.idioma}
        />
      </div>
    </div>
  );
};

export default withTheme(App);
