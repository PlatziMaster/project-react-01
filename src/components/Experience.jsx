import React from 'react';
import Item from './Item';
import '../styles/components/Experience.styl';

const experience = [
  {
    id: 1,
    position: 'Full Stack Developer',
    name: 'Ironbit / America Movil',
    period: '08/2018 – Present',
    tasks: [
      'Building PHP API\'s and Services using Codeigniter and Slim frameworks.',
      'Support from many Angular v8 apps built in-house.',
      'Management code revision history using SorceTree & Bitbucket; use JIRA boards to manage Sprint tasks.',
      'Developing an Angular onboarding from Claro Drive.',
    ],
  },
  {
    id: 2,
    position: 'Full Stack Developer',
    name: 'Telasist',
    period: '02/2017 – 07/2018',
    tasks: [
      'Develop survey management system using Laravel 5.6 and VueJS v.2 to show a KPI\'s charts board.',
      'Building modules using ZendFramework for an operation in-house system.',
      'Affiliate management information analysis collection.',
      'Database administration (MySQL, MongoDB).',
      'Building collection Process & Reports.',
    ],
  },
];

const Experience = () => {
  return (
    <div className='Experience'>
      <h3 className='Experience-title'>Experience</h3>
      <div className='Experience__container'>
        {
          experience.map(item => (<Item key={item.id} item={item} />))
        }
      </div>
    </div>
  );
};

export default Experience;
