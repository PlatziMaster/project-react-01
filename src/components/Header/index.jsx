import React, { useContext } from 'react';
import HeaderLayout from './HeaderLayout';

import DataContext from '../../contexts/DataContext';

const Header = ({ children }) => {
  const { data, loading } = useContext(DataContext);
  const initData = { name: '', avatar: '' };
  const { name, avatar } = data || initData;
  return (
    <HeaderLayout loading={loading} name={name} avatar={avatar}>
      {children}
    </HeaderLayout>
  );
};

export default Header;
