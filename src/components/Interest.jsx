import React from 'react';

const Interest = ({ interest }) => {
  const interestTitle = interest || Array(1).fill(1);
  const interestArray = interest || Array(3).fill(1);
  return (
    <>
      {interestTitle.map(item => (
        <h1 className='mb-3 Interest-title' key={item.id}>{item.category}</h1>
      ))}
      {interestArray.map(item => (
        <React.Fragment key={item.id}>
          <div className='row'>
            <div className='col mt-2 text-center Interest-item'>
              <h5>{item.name}</h5>
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default Interest;
