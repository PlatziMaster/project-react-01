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

const API = 'http://localhost:3000/data/';

const App = () => {
  const initialState = useInitialState(API);

  return (
    <React.Fragment>
      <Header src={initialState.avatar}>
        <About
          job={initialState.profession}
          title={initialState.name}
          phone={initialState.phone}
          email={initialState.email}
          website={initialState.website}
          address={initialState.address}
        />
      </Header>
      <Profile desc={initialState.Profile} />
      <Experience />

      {initialState.Academic.length ?
        <Academic
          academy1={initialState.Academic[0].degree}
          academy2={initialState.Academic[1].degree}
          academy3={initialState.Academic[2].degree}
        />
        : <Academic
          academy1="Cargando..."
          academy2="Cargando..."
          academy3="Cargando..."
        />
      }

      {initialState.skills.length ?
        <Skills
          skill1={initialState.skills[0].name}
          skill2={initialState.skills[1].name}
          skill3={initialState.skills[2].name}
          skill4={initialState.skills[3].name}
          percent1={initialState.skills[0].percentage}
          percent2={initialState.skills[1].percentage}
          percent3={initialState.skills[2].percentage}
          percent4={initialState.skills[3].percentage}
        />
        : <Skills
          skill1="Cargando..."
          skill2="Cargando..."
          skill3="Cargando..."
          skill4="Cargando..."
        />
      }

      {initialState.interest.length ?
        <Interest
          interest0={initialState.interest[0]}
          interest1={initialState.interest[1]}
          interest2={initialState.interest[2]}
          interest3={initialState.interest[3]}
        />
        : <Interest
          interest0="Cargando..."
          interest1="Cargando..."
          interest2="Cargando..."
          interest3="Cargando..."
        />
      }

      {initialState.languages.length ?
        <Languages
          name0={initialState.languages[0].name}
          name1={initialState.languages[1].name}
          name2={initialState.languages[2].name}
          percentage0={initialState.languages[0].percentage}
          percentage1={initialState.languages[1].percentage}
          percentage2={initialState.languages[2].percentage}
        />
        : <Languages
          name0="Cargando..."
          name1="Cargando..."
          name2="Cargando..."
        />
      }

    </React.Fragment>
  )
};

export default App;
