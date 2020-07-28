import React from 'react';

const Profile = ({ About }) => {
  const aboutArray = About || Array(1).fill(1);
  return (
    <div className='col Container__content rounded-lg shadow p-4'>
      {aboutArray.map(item => (
        <>
          <h1 className='Profile-title'>{item.category}</h1>
          <h5 className='Profile-desc'>{item.Profile}</h5>
        </>
      ))}
    </div>
  );
};
export default Profile;
2;
