/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { GrDocumentPdf } from 'react-icons/gr';
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

  const ButtonI = styled.button`
    background-color:#8cbe75;
    border-radius:6px;
    border:1px solid #8cbe75;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:1em;
    padding:5px 30px;
    text-decoration:none;
    text-shadow:0px 1px 0px #2f6627;
  `;

  const [language, setLanguage] = useState(false);

  return (
    <div className='body'>

      {
        (language) ?
          (
            <a href='../../CVes.pdf' download><GrDocumentPdf size={40} /></a>
          ) :
          (
            <a href='../../CVen.pdf' download><GrDocumentPdf size={40} /></a>
          )
      }

      <ButtonI
        type='button'
        onClick={() => setLanguage(false)}
      >
        En
      </ButtonI>

      <ButtonI
        type='button'
        onClick={() => setLanguage(true)}
      >
        Es
      </ButtonI>
      <Button onClick={() => themeToggle.toggle()}>
        {props.theme.mode === 'dark' ? '⛅' : '🌜'}
      </Button>
      <div className='Container'>
        <Header
          name={info.es.data.name}
          profession={info.es.data.profession}
          avatar={info.es.data.avatar}
        >
          {
            (language) ?
              (
                <About
                  section={info.es.data.section.contacto}
                  phone={info.es.data.phone}
                  email={info.es.data.email}
                  website={info.es.data.website}
                  address={info.es.data.address}
                />
              ) :
              (
                <About
                  section={info.en.data.section.contacto}
                  phone={info.en.data.phone}
                  email={info.en.data.email}
                  website={info.en.data.website}
                  address={info.en.data.address}
                />
              )
          }
        </Header>
        {
          (language) ?
            (
              <Profile
                section={info.es.data.section.perfil}
                profile={info.es.data.profile}
              />
            ) :
            (
              <Profile
                section={info.en.data.section.perfil}
                profile={info.en.data.profile}
              />
            )
        }

        {
          (language) ?
            (
              <Experience
                section={info.es.data.section.experiencia}
                itemsArray={info.es.data.experience}
              />
            ) :
            (
              <Experience
                section={info.en.data.section.experiencia}
                itemsArray={info.en.data.experience}
              />
            )
        }

        {(language) ?
          (
            <Academic
              itemsArray={info.es.data.academic}
              section={info.es.data.section.educacion}
            />

          ) :
          (
            <Academic
              itemsArray={info.en.data.academic}
              section={info.en.data.section.educacion}
            />

          )
        }

        {
          (language) ?
            (
              <Skills
                itemsArray={info.es.data.skills}
                section={info.es.data.section.habilidades}
              />
            ) :
            (
              <Skills
                itemsArray={info.en.data.skills}
                section={info.en.data.section.habilidades}
              />
            )
        }

        {
          (language) ?
            (
              <Interest
                itemsArray={info.es.data.interest}
                section={info.es.data.section.intereses}
              />
            ) :
            (
              <Interest
                itemsArray={info.en.data.interest}
                section={info.en.data.section.intereses}
              />
            )
        }

        {
          (language) ?
            (
              <Languages
                itemsArray={info.es.data.languages}
                section={info.es.data.section.idioma}
              />
            ) :
            (
              <Languages
                itemsArray={info.en.data.languages}
                section={info.en.data.section.idioma}
              />
            )
        }
      </div>
    </div>
  );
};

export default withTheme(App);
