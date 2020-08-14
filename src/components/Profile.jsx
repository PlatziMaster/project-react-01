import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee);

const Profile = (props) => {
  const {
    title = 'About me',
    profile = 'Systems Maintenance Deputy Director SCT-DGDC (Since 2006), Currently an active member of the Platzi Master program (Since May 2020), developing for Full Stack JavaScript.',
    social = [
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
  } = props;
  return (
    <div className='Profile'>
      <div className='Profile-content'>
        <h2 className='Profile-title'>{title}</h2>
        <p className='Profile-desc'>{profile}</p>
      </div>
      <div className='Profile-social'>
        {social.map(item => (
          <a className='Profile-item' key={item.name} href={item.url}>
            <FontAwesomeIcon key={item.url} icon={['fab', item.name]} size='lg' />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Profile;
