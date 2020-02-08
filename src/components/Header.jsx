import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';

const Header = () => {
  const dispatch = useDispatch();

  const fetchdata = async () => {
    const response = await fetch('http://localhost:3000/data');
    const data = await response.json();
    dispatch(setUser(data));
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <header className='header_area'>
      <div className='main_menu'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <div className='container box_1620'>
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
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
