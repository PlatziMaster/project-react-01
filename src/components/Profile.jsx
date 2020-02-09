import React from 'react';

const Profile = ({ Profile }) => {
  return (
    <div className='Profile'>
      <div className='Profile-title'>
        <h2>Profile</h2>
      </div>
      <div className='Profile-desc'>
        <p>{Profile}</p>
      </div>
    </div>
  );
};

export default Profile;
