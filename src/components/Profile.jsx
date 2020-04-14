import React from 'react';

const Profile = ({ title, description }) => {
  return (
    <section className='Profile'>
      <h2 className='Profile-title'>{title}</h2>
      <p className='Profile-desc'>{description}</p>
    </section>
  )
}

export default Profile;