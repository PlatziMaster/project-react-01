import React, { useContext } from 'react';
import ProfileLayout from './ProfileLayout';

import DataContext from '../../contexts/DataContext';

const Profile = () => {
  const { data, loading } = useContext(DataContext);
  const initData = { profile: '' };
  const { profile } = data || initData;
  return <ProfileLayout loading={loading} profile={profile} />;
};

export default Profile;
