import React from 'react';
import '../styles/components/Profile.styl';

const profile = {
  title: 'Profile',
  desc: 'Full-Stack developer with 5 years of experience in web application development using PHP language to develop back end and JavaScript Frameworks such as Angular, Vue JS, React to develop the front end. Currently, I am looking for an opportunity that allows me to turn around my life to keeping grow up.',
};

const Profile = () => {
  return (
    <div className='Profile'>
      <h3 className='Profile-title'>{profile.title}</h3>
      <p className='Profile-desc'>{profile.desc}</p>
    </div>
  );
};

export default Profile;
