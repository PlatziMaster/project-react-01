import React from 'react';
import LanguagesItem from './LanguagesItem';
import '../styles/components/Languages.styl';

const Languages = (props) => {
  let i=0;
  return (
    <div className='Languages'>
      <div className="Languages-title">
        Languages
      </div>
      <div className="Languages-items">
        {props[0] ?
          (Object.keys(props).map(item => <LanguagesItem key={i++} {...props[item]} />)) :
          (<div className='Languages-item'> Ninguno </div>) }


      </div>
    </div>
  );
};

export default Languages;