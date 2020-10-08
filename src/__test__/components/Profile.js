import React from 'react';
import '../../styles/components/Profile.css';

const Profile = ({ profile }) => {
  return (
    <section className='Profile__container'>
      <h2 className='Profile__title'>Profile</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
      </p>
    </section>
  );
};
export default Profile;
