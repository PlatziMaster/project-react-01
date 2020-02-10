import React from 'react'
import '../styles/components/Profile.styl'

const Profile = ({profile}) => (
    <>
        <div className="Profile">
            <h3 className="Profile-title">Perfil</h3>
            <p className="Profile-desc">{profile}</p>
        </div>
    </>
);

export default Profile;