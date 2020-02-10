import React, { useContext } from 'react';
import AcademicLayout from './AcademicLayout';

import DataContext from '../../contexts/DataContext';

const Academic = () => {
  const { data, loading } = useContext(DataContext);
  const initData = { academic: [''], certificate: ['', ''] };
  const { academic, certificate } = data || initData;
  return <AcademicLayout loading={loading} academic={academic} certificate={certificate} />;
};

export default Academic;
