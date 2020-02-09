import React from 'react';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import '../styles/components/Languages.styl';

const Languages = ({ languages }) => {
  return (
    <div className='Languages'>
      <div className='Languages-title'>
        <h2>Languages</h2>
      </div>
      <div className='Languages-container'>
        {languages !== undefined ?
          languages.map((item) => {
            return (
              <LanguagesItem
                key={item.name}
                {...item}
              />
            );
          }) : (
            <>
              <div className='Languages-item' />
              <div className='Languages-item' />
              <div className='Languages-item' />
            </>
          )}
      </div>
    </div>
  );
};

const LanguagesItem = ({ name, percentage }) => {
  return (
    <div className='Languages-item'>
      <Progress
        type='circle'
        width={70}
        percent={percentage}
        status='languages'
        theme={{
          languages: {
            color: '#fbc630',
          },
        }}
      />
      {name}
      <br />
    </div>
  );
};

export default Languages;
