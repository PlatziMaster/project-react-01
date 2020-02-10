import React, { useContext } from 'react';
import AboutLayout from './AboutLayout';

import DataContext from '../../contexts/DataContext';

const About = () => {
  const { data, loading } = useContext(DataContext);
  const initData = { profession: '', phone: '', email: '', website: '', address: '' };
  const { profession, phone, email, website, address } = data || initData;
  return (
    <AboutLayout
      loading={loading}
      profession={profession}
      phone={phone}
      email={email}
      website={website}
      address={address}
    />
  );
};

export default About;
