import React from 'react';
import '../styles/components/Academic.styl';

const Academic = ({ academic }) => {
  const academicItems = academic || Array(3).fill(1);
  return (
    <div className='Academic section'>
      <h2 className='Academic-title'>Academic Degrees</h2>
      <ul className='Academic-list'>
        {academicItems.map((item, index) => {
          return (
            <div className='Academic-item' key={index}>
              <li>
                <h5>Degree:</h5>
                <p>{item.degree}</p>
              </li>
              <li>
                <h5>Description:</h5>
                <p>{item.description}</p>
              </li>
              <li>
                <h5>End Date:</h5>
                <p>{item.endDate}</p>
              </li>
              <li>
                <h5>Start Date:</h5>
                <p>{item.startDate}</p>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Academic;
