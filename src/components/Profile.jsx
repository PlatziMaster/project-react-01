import React, { useState, useEffect } from 'react';
import '../styles/components/Profile.styl';
import { _aboutMe_ } from '../__mocks__/styleMock';

function Profile(props) {
  const [profile, setProfile] = useState(_aboutMe_);

  useEffect(() => {
    if (Object.keys(props).length > 0) {
      setProfile(props);
    }
  });

  return (
    <div className="Profile section">
      <div className="Profile-title">My Profile</div>
      <div className="Profile-desc">{profile.Profile}</div>
    </div>
  );
}

export default Profile;
