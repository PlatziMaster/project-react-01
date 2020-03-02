import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    const { name, avatar, profession } = this.props ;
    return (
      <div className='Header containter'>
        <div className='Header-img'>
          <img src={avatar} alt='' />
        </div>
        <div className='Header-title'>
          <h1>
            {name}
          </h1>
        </div>
        <div className='Header-job-title'>
          <h3>
            {profession}
          </h3>
        </div>
      </div>
    );
  }
}
