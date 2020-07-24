import React, { Fragment } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import useData from '../hooks/useData';

const API = 'http://localhost:3000/data';

const App = () => {
  const data = useData(API);

  return (
    <Fragment>
      <Header
        picture={data.avatar}
        header_title={data.name}
        header_job={data.profession}
      >
        <About
          about_phone={data.phone}
          about_address={data.address}
          about_website={data.website}
          about_email={data.email}
        />
      </Header>
      <Profile profile_description={data.profile} />
      <Experience Experience={data.experience} />
      <div className="container-sail">
        <Academic Academic={data.Academic} />
        <Skills Skills={data.skills} />
        <Interest Interests={data.interest} />
        <Languages Languages={data.languages} />
      </div>
    </Fragment>
  );
};

export default App;
