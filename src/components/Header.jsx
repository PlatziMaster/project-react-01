import React from 'react';
import '../styles/components/Header.styl';

const Header = (props) => {
  return (
    <div>
      <nav>
        <ul className="menu">
          <li className="logo">
            <a href="#">React Curriculum vitae</a>
          </li>
          <li className="item">
            <a href="#">Inicio</a>
          </li>
          <li className="item">
            <a href="#">Acerca de</a>
          </li>
        </ul>
      </nav>
      <section className="Header">
        <img className="Header-img" src={props.avatar} />
        <div className="Header__card">
          <h2 className="Header-title">{props.name}</h2>
          <h3 className="Header-job-title">{props.profession}</h3>
        </div>
      </section>
    </div>
  );
};

export default Header;
