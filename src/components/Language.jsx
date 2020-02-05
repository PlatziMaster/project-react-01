import React from 'react';

const Language = ({ name, percentage }) => {
  return (
    <div className='Language'>
      <div>
        {name}
      </div>
      <div>
        {percentage}
      </div>
    </div>
  );
};

export default Language;
