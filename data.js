import React from 'react';

export const Information = {
  data: {
    name: 'César Galindo',
    profession: 'Frontend Developer',
    address: 'Bogotá, Colombia.',
    email: 'csgalindos@hotmail.com',
    website: 'http://cesargalindos.com',
    phone: '300 365 85 68',
    avatar:
      'https://pbs.twimg.com/profile_images/1055299470148227072/xeEopDm__400x400.jpg',
    profile:
      "Ignore the squirrels, you'll never catch them anyway hack, for floof tum, tickle bum, jellybean footies curly toes climb leg roll over and sun my belly",
    certificate: [
      {
        date: 'Nov 2009',
        description: 'work about supply and progress of buy',
        institution: 'Javeriana',
        name: 'supply',
      },
      {
        date: 'Jan 2010',
        description: 'set segurity in interm sistem',
        institution: 'Cali',
        name: 'Backend Developer',
      },
    ],
    Academic: [
      {
        degree: 'ingeniera industrial',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        endDate: 'Jan 2015',
        institution: 'Konrad',
        startDate: 'Jan 2010',
      },
      {
        degree: 'psicology',
        description: 'I try to learn about the cat',
        endDate: 'Decenber 2015',
        institution: 'Xaveriana',
        startDate: 'Jan 2017',
      },
      {
        degree: 'psicology',
        description: 'I try to learn about the cat',
        endDate: 'Decenber 2015',
        institution: 'Xaveriana',
        startDate: 'Jan 2017',
      },
    ],
    experience: [
      {
        company: 'Javeriana',
        endDate: 'Present',
        jobDescription: 'Lorem ipsum dolor sit amet consectetur',
        jobTitle: 'Frontend',
        startDate: 'Jan 2020',
      },
      {
        company: 'Javeriana Cali',
        endDate: 'Jan 2013',
        jobDescription: 'created data bases',
        jobTitle: 'Backend',
        startDate: 'Sept 2010',
      },
      {
        company: 'Sodimec',
        endDate: 'Jan 2013',
        jobDescription: 'created data bases',
        jobTitle: 'Backend',
        startDate: 'Sept 2010',
      },
    ],
    skills: [
      {
        name: 'HTML5',
        percentage: '80%',
      },
      {
        name: 'CSS',
        percentage: '50%',
      },
      {
        name: 'JavaScript',
        percentage: '60%',
      },
      {
        name: 'React',
        percentage: '70%',
      },
    ],
    interest: [
      { name: 'react' },
      { name: 'develop' },
      { name: 'javascript' },
      { name: 'frontend' },
    ],
    languages: [
      {
        name: 'Spanish',
        percentage: '85%',
      },
      {
        name: 'English',
        percentage: '40%',
      },
      {
        name: 'portuguese',
        percentage: '40%',
      },
    ],
    social: [
      {
        name: 'facebook',
        url: 'https://facebook.com/',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/',
      },
      {
        name: 'github',
        url: 'https://github.com/',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/',
      },
    ],
  },
};

const InformationContext = React.createContext(Information.data);

export default InformationContext;
