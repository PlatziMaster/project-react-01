import React from 'react';
import LanguagesLayout from './LanguagesLayout';

const Languages = () => {
  const languages = ['item', 'item', 'item'];
  return <LanguagesLayout loading languages={languages} />;
};

export default Languages;
