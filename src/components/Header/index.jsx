import React from 'react';
import HeaderLayout from './HeaderLayout';

const Header = ({ children }) => (
  <HeaderLayout loading>
    {children}
  </HeaderLayout>
);

export default Header;
