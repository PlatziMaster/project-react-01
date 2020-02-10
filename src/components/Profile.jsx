import React from 'react';
import '../styles/components/Profile.styl';
const Profile = ({ excerpt }) => {
  return (
    <div className="Profile">
      <div className="container rounded shadow card">
        <h1 className="Profile-title">About</h1>
        <div className="Profile-desc">
          {excerpt}
        </div>
      </div>
    </div>
  );
};

export default Profile;
