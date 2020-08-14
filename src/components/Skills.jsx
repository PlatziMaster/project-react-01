import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

const Skills = (props) => {
  const {
    title = 'Skills',
    skills = [
      {
        'name': 'HTML5',
        'percentage': '75%',
      },
      {
        'name': 'CSS',
        'percentage': '25%',
      },
      {
        'name': 'JavaScript',
        'percentage': '55%',
      },
      {
        'name': 'React',
        'percentage': '90%',
      },
    ],
  } = props;
  return (
    <section className='Skills'>
      <h2 className='Skills-title'>{title}</h2>
      {skills.map(item => (
        <div key={item.name} className='Skills-item'>
          <p>
            {item.name}
            {' '}
            {
              {
                'HTML5': <span><FontAwesomeIcon icon={faHtml5} color='#f16529' size='lg' /></span>,
                'CSS': <span><FontAwesomeIcon icon={faCss3Alt} color='#2965f1' size='lg' /></span>,
                'JavaScript': <span><FontAwesomeIcon icon={faJsSquare} color='#F0DB4F' size='lg' /></span>,
                'React': <span><FontAwesomeIcon icon={faReact} color='#61DBFB' size='lg' /></span>,
              }[item.name] || <span>{' '}</span>
            }
          </p>
          {/* <p>{item.percentage}</p> */}
          {/* <i><img src={item.image} alt={item.name} /></i> */}
        </div>
      ))}
    </section>
  );
};

export default Skills;
