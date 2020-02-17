import React from 'react';
import '../styles/components/Academic.css';

const Academic = (props) => {
  const academic = Object.values(props);
  return (
    <div className='Academic'>
      <h2 className='Academic-title'>Academic</h2>
      {academic.map(item => (
        <div className='Academic-item'>
          <h3>{item.institution}</h3>
          <h4>
            {item.degree}
            <br />
            {item.startDate}
            -
            {item.endDate}
          </h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Academic;
