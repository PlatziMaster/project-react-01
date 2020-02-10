import React from 'react';
import About from './About';

export default function Header(info) {
  return (
    <div className='Header-title'>
      <About info={info} />
    </div>
  );
}
