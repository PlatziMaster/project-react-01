import React, { useState, useEffect } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import Social from '../components/Social';
import getData from '../utils/getData';


const App = () => {
  const api = 'http://localhost:3000';
  const [ data, setData ] = useState({});
  
  useEffect(() => {
    getData(`${api}/data`)
    .then(result => result.json())
    .then(json => {
      setData(json);
    });
  }, [] );
  
  return (
    <>
      <Header {...data}>
        <About />
      </Header>
      <Profile {...data} />

      <div className="Experience">
        <h1>Experience</h1>
        { data !== undefined && data.experience !== undefined &&
          data.experience.map( (experience) => <Experience key={experience.id} {...experience }/>)
        }
      </div>
      

      <div className='Main-container'>
        <div className='Academic'>
        <h1 className='Academic-title'> Academic</h1>
          { data !== undefined && data.Academic !== undefined &&
            data.Academic.map((academic) => <Academic key={academic.id} {...academic}/>)
          }
        </div>
        <div className='Skills'>
          <h1 className='Skills-title'> Skills </h1>
          { data !== undefined && data.skills !== undefined &&
            data.skills.map((skill) => <Skills key={skill.id} {...skill} />)
          }
        </div>

        { data !== undefined && data.interest !== undefined &&
          <div className='Interest'>
          <h1 className='Interest-title'> Interest</h1>
          {
            data.interest.map( (interest) => <Interest key={interest.id} {...interest} />)
          }
          </div>
        }
        
        { data !== undefined && data.languages !== undefined &&
          <div className='Languages'>
            <h1 className='Languages-title'> Languages </h1>
            {
              data.languages.map((language) => <Languages key={language.id} {...language} />)
            }
          </div>
        }
      </div>
      { data !== undefined && data.social !== undefined &&
          <Social {...data} />
      }
    </>
  )
};

export default App;
