import React, { Component } from 'react';

class About extends Component {
  render() {
    const { profession, address, email, website, phone } = this.props;
    return (
      <>
        <div className="About-title">{profession}</div>
        <div className="About-detail">
          <div className="About-item">{phone}</div>
          <div className="About-item">{email}</div>
          <div className="About-item">{website}</div>
        </div>
        <div className="About-item">{address}</div>
      </>
    );
  }
}

export default About;
