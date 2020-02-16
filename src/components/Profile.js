import React from 'react';
import '../styles/components/Profile.styl';

class Profile extends React.Component {
  render() {
    const { profile } = this.props;
    return (
      <div className='Profile'>
        <h1 className='Profile-title'>Perfil profesional</h1>
        <p className='Profile-desc'>{profile}</p>
      </div>
    );
  }
}

export default Profile;
