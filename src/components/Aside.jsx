import React from 'react';

import '../styles/components/Aside.styl';

const Aside = ({ children }) => {
  return (
    <div className='Aside'>
      {children}
    </div>
  );
};

export default Aside;
