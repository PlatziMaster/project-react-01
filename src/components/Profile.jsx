import React, { Component } from 'react';

class Profile extends Component {
  render() {
    const { profile } = this.props;
    return (
      <>
        <div className="container-info">
          <div className="Profile-title title">Perfil</div>
          <div className="Profile-desc">{profile}</div>
        </div>
      </>
    );
  }
}

export default Profile;
