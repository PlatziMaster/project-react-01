import React from 'react';
import '../styles/components/Profile.styl';

const Profile = ({ Profile }) => {
  return (
    <div className='Profile'>
      <h2>My profile</h2>
      {Profile}
    </div>
  );
};

export default Profile;
