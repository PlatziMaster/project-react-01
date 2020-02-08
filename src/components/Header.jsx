import React from 'react';
import '../styles/components/Header.styl';

class Header extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className='Header'>
        <div className='Header-title' />
        <img
          className='Header__avatar'
          src='https://2.gravatar.com/avatar/b9c674ca7541ea962e68107fbc6cb335?s=400&d=mm'
          alt='Avatar'
        />
        {children}
      </div>
    );
  }
}

export default Header;
