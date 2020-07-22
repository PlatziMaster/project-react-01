import React from 'react';
import '../styles/components/Profile.styl';
const Profile = ({ profile_description }) => (
  <div className="Profile-container">
    <h2 className="Profile-title">Profile</h2>
    <p className="Profile-desc">{profile_description}</p>
  </div>
);

export default Profile;
