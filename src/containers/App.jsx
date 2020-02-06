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
import Social from '../components/Social';
import { getState } from '../utils/getData';

const state = {
  'name': 'Arantxa Rosas',
  'profession': 'FrontEnd Developer',
  'address': 'Ciudad de México, México',
  'email': 'ary.rosvall@gmail.com',
  'website': 'aryrosvall.com',
  'phone': '55 6358 4267',
  'avatar': 'https://arepa.s3.amazonaws.com/melissa.jpg',
  'Profile': 'Soy una profesional apasionada por la tecnología, con experiencia en el desarrollo y gestión de productos y proyectos de tecnologías web y móviles.',
  'certificate': [
    {
      'date': 'Jan 2021',
      'description': 'Hack up furballs try to jump onto window and fall while scratching at wall. ',
      'institution': 'Platzi',
      'name': 'FrontEnd Developer',
    },
    {
      'date': 'Jan 2021',
      'description': 'Scratch at the door then walk away wack the mini furry mouse',
      'institution': 'Platzi',
      'name': 'Backend Developer',
    },
  ],
  'Academic': [
    {
      'degree': 'Atomic Master',
      'description': ' I’m so hungry i’m so hungry but ew not for that pelt around the house and up and down stairs chasing phantoms',
      'endDate': 'Jan 2017',
      'institution': 'MIT',
      'startDate': 'Jan 2018',
    },
    {
      'degree': 'blablabla',
      'description': 'Meow in empty rooms. Find empty spot in cupboard and sleep all day check cat door for ambush 10 times before coming in for hack. ',
      'endDate': 'Decenber 2015',
      'institution': 'Harvard',
      'startDate': 'Jan 2017',
    },
  ],
  'experience': [
    {
      'company': 'PugStar',
      'endDate': 'Present',
      'jobDescription': "scratch the furniture. Good now the other hand, too lay on arms while you're using the keyboard.",
      'jobTitle': 'Frontend',
      'startDate': 'Jan 2020',
    },
    {
      'company': 'CatStore',
      'endDate': 'Jan 2016',
      'jobDescription': 'Meow in empty rooms lick left leg for ninety minutes, still dirty.',
      'jobTitle': 'Backend',
      'startDate': 'Sept 2019',
    },
  ],
  'skills': [
    {
      'name': 'HTML5',
      'percentage': '75',
    },
    {
      'name': 'CSS',
      'percentage': '25',
    },
    {
      'name': 'JavaScript',
      'percentage': '55',
    },
    {
      'name': 'React',
      'percentage': '90',
    },
  ],
  'interest': [
    'javascript',
    'develop',
    'backend',
    'frontend',
  ],
  'languages': [
    {
      'name': 'Spanish',
      'percentage': '90',
    },
    {
      'name': 'Portuguese',
      'percentage': '10',
    },
    {
      'name': 'English',
      'percentage': '60',
    },
  ],
  'social': [
    {
      'name': 'facebook',
      'url': 'https://facebook.com/',
    },
    {
      'name': 'twitter',
      'url': 'https://twitter.com/',
    },
    {
      'name': 'github',
      'url': 'https://github.com/',
    },
    {
      'name': 'linkedin',
      'url': 'https://www.linkedin.com/',
    },
  ],
};

const App = () => {
  const _URL = 'http://localhost:3000/data';

  //const state = getState(_URL);

  console.log('estado', state);

  return (
    <>
      <Header />
      <About
        name={state.name}
        profession={state.profession}
        phone={state.phone}
        email={state.email}
        website={state.website}
        address={state.address}
      />
      <Profile
        profile={state.profile}
        profession={state.profession}
      />
      <Experience experience={state.Experience} />
      <Academic academic={state.Academic} />
      <Skills skills={state.skills} />
      <Languages languages={state.languages} />
      <Interest interest={state.interest} />
      <Social social={state.social} />
    </>
  );
};

export default App;
