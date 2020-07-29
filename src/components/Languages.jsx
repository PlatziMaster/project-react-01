import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Languages = ({ Languages }) => {
  const LanguagesTitle = Languages || Array(1).fill(1);
  const LanguagesArray = Languages || Array(3).fill(1);
  return (
    <>
      {LanguagesTitle.map(item => (
        <h1 className='mb-3 Languages-title' key={item.id}>{item.category}</h1>
      ))}
      {LanguagesArray.map(item => (
        <React.Fragment key={item.id}>
          <div className='row'>
            <div className='col mt-2 Languages-item'>
              <h5>{item.name}</h5>
              <ProgressBar animated variant='success' now={item.percentage} />
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default Languages;
