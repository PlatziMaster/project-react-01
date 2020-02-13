import React from 'react';
import '../styles/components/Profile.styl';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/data';

const Profile = () => {
  const initialState = useInitialState(API);
  return (
    <div className='Profile'>
      <h1 className='Profile-title'>Perfil</h1>
      <p className='Profile-desc'>{initialState.Profile}</p>
    </div>
  );
};

export default Profile;
