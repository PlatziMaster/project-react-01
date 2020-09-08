import React from 'react';
import '../styles/components/Profile.styl';

const Profile = (props) => {
  return (
    <div className="Profile">
      <h2 className="Profile-title">Profile</h2>
      <p className="Profile-desc">
        {props.profile}
      </p>
    </div>
  );
};

export default Profile;
