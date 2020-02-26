import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { name, avatar } = this.props;

    return (
      <>
        <div className="Header-container">
          <div className="Header-container__img">
            <img src={avatar} alt="Profile Image." />
          </div>
          <div className="Header-container__info">
            <div className="Header-title">{name}</div>
            {this.props.children}
          </div>
        </div>
      </>
    );
  }
}

export default Header;
