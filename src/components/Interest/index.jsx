import React, { useContext } from 'react';
import InterestLayout from './InterestLayout';

import DataContext from '../../contexts/DataContext';

const Interest = () => {
  const { data, loading } = useContext(DataContext);
  const initData = { interest: ['item', 'item', 'item'] };
  const { interest } = data || initData;
  return <InterestLayout loading={loading} interest={interest} />;
};

export default Interest;
