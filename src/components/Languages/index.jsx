import React, { useContext } from 'react';
import LanguagesLayout from './LanguagesLayout';

import DataContext from '../../contexts/DataContext';

const Languages = () => {
  const { data, loading } = useContext(DataContext);
  const initData = { languages: ['item', 'item', 'item'] };
  const { languages } = data || initData;
  return <LanguagesLayout loading={loading} languages={languages} />;
};

export default Languages;
