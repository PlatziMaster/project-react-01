import React from 'react';

const Academic = ({ academic }) => {
  return (
    <div className='Academic'>
      <div className='Academic-title'>
        <h2>Academic</h2>
      </div>
      <div className='Academic-container'>
        {academic !== undefined ?
          academic.map((item) => {
            return (
              <AcademicItem
                key={item.institution}
                {...item}
              />
            );
          }) : (
            <>
              <div className='Academic-item' />
              <div className='Academic-item' />
              <div className='Academic-item' />
            </>
          )}
      </div>
    </div>
  );
};

const AcademicItem = ({ degree, institution, description, startDate, endDate }) => {
  return (
    <>
      <div className='Academic-item'>
        {degree}
        -
        {institution}
      </div>
      <div className='Academic-item'>
        {description}
      </div>
      <div className='Academic-item'>
        {startDate}
        -
        {endDate}
      </div>
      <br />
    </>
  );
};

export default Academic;
