import React from 'react';

const Profile = ({ profile }) => {

  return (
    <section className='section Profile'>
      <div className='Profile-container'>
        <h3 className='Profile-title'>Profile</h3>
        <p className='Profile-desc'>{profile}</p>
      </div>
    </section>
  );
};

export default Profile;
