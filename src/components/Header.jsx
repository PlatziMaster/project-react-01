
import React from 'react';

const Header = () => (

  <header className='header_area'>
    <div className='main_menu'>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container box_1620'>
          <a
            className='navbar-brand logo_h'
            href='index.html'
          >
            <img
              src='img/logo.png'
              alt=''
            />

          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='icon-bar' />
            <span className='icon-bar' />
            <span className='icon-bar' />
          </button>

          <div
            className='collapse navbar-collapse offset'
            id='navbarSupportedContent'
          >
            <ul className='nav navbar-nav menu_nav ml-auto'>
              <li className='nav-item active'>
                <a className='nav-link' href='index.html'>Inicio</a>
              </li>

              <li className='nav-item'>
                <a className='nav-link' href='contact.html'>Contactame</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>

);

export default Header;
