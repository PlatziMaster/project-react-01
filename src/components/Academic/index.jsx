import React, { useContext } from 'react';
import AcademicLayout from './AcademicLayout';

import DataContext from '../../contexts/DataContext';

const Academic = () => {
  const { data, loading } = useContext(DataContext);
  const initData = { academic: ['', '', ''] };
  const { academic } = data || initData;
  return <AcademicLayout loading={loading} academic={academic} />;
};

export default Academic;
