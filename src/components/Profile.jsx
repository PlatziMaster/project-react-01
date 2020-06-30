import React from 'react';
import '../styles/components/Profile.styl';

const Profile = ({ desc }) => {
  return (
    <div className="Profile">
      <h1 className="Profile-title">Professional Profile</h1>
      <p className="Profile-desc">{desc}</p>
    </div>
  )
}

export default Profile;