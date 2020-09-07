
import React from 'react';
import '../styles/components/Profile.styl';

const Profile = ({ profile }) => {
    return (
        <section className='Profile'>
            <h2 className='Profile-title'>Mi perfil</h2>
            <p className="Profile-desc">{profile}</p>
        </section>
    )
}

export default Profile