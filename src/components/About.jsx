import React, { useContext } from 'react';
import InformationContext from '../../data';

export default function About() {
  const Information = useContext(InformationContext);
  console.log(InformationContext);
  return (
    <div className='About'>
      <div className='About-title'>
        <h2>Contact Information</h2>
      </div>
      <div className='About-phone About-item'>
        {' '}
        ☎️
        {' '}
        {Information.phone}
      </div>
      <div className='About-email About-item'>
        {' '}
        📪
        {' '}
        {Information.email}
      </div>
      <div className='About-website About-item'>
        {' '}
        💾
        {' '}
        {Information.website}
      </div>
      <div className='About-address About-item'>
        {' '}
        🌎
        {' '}
        {Information.address}
      </div>
    </div>
  );
}
