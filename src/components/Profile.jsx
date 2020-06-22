import React from 'react';
import '../styles/components/Profile.styl';

const Profile = ({ Profile, ProfileTitle }) => (
  <div className="Profile">
    <h2 className="Profile-title">{ProfileTitle}</h2>
    <p className="Profile-desc">{Profile}</p>
  </div>
);

export default Profile;
