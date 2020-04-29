import React, {useContext} from 'react';
import '../styles/components/Header.styl';
import ThemeContext from '../context/ThemeContext';


const Header = ({ children, img }) => {
  const { dark } = useContext(ThemeContext);
  return (
    <>
      <div className={dark ? 'header' : 'dark-mode-header'}>
        <figure>
          <img src={img} alt="profile img" />
        </figure>
        {children}
      </div>
    </>
  );
};

export default Header;
