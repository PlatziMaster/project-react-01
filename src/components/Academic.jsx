import React from 'react';

const Academic = ({ academic }) => {
  const academicTitle = academic || Array(1).fill(1);
  const academicArray = academic || Array(3).fill(1);
  return (
    <>
      {academicTitle.map(item => (
        <h1 className='mb-3 Academic-title'>{item.category}</h1>
      ))}
      {academicArray.map(item => (
        <>
          <div className='row'>
            <div className='col-md-6 col-sm-12 mt-2 Academic-item'>
              <h5>{item.name}</h5>
              <h5>{item.institution}</h5>
              <h5>{item.date}</h5>
            </div>
            <div className='col-md-6 col-sm-12 mt-2'>
              <h5>{item.description}</h5>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Academic;
