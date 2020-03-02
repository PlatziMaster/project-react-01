import React, { Component } from 'react';

export default class About extends Component {
  render() {
    const { phone, email, website, address } = this.props;
    return (
      <div className='About'>
        <div className='About-title'>
          <h2>
            Información de contacto
          </h2>
        </div>

        <div className='About-phone About-item'>
          {phone}
        </div>

        <div className='About-email About-item'>
          {email}
        </div>

        <div className='About-website About-item'>
          {website}
        </div>

        <div className='About-address'>
          {address}
        </div>

      </div>
    );
  }
}
