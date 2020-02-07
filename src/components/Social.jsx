import React from 'react';

const Social = ({social}) => {
  return (
    <div className='Social'>
      {
        social !== undefined &&
        social.map((detail) => <a className='Social-title' key={detail.id} href={detail.url}>{detail.name}</a>)
      }
      
    </div>  
  );
};

export default Social;