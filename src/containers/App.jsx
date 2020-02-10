import React, {useState, useEffect} from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';

const App = () => {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    getData('http://localhost:3000/data')
      .then(res => setData(res));
  }, []);

  return (
    <>
      <div className="container">
        <Header data={data}>
          <About />
        </Header>
        <Profile profile={data.profile}/>
        <Experience experience={data.experience}/>
        <Academic academic={data.Academic}/>
        <Skills skill={data.skills}/>
        <Interest interest={data.interest}/>
        <Languages language={data.languages}/>
      </div>
    </>
  )
};

export default App;
