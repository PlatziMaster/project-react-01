import React from 'react'
import '../styles/components/Header.styl'

const Header = ({children}) => (
    <>
        <div className="Header">
            <div className="Header-photo">
                <img src="https://drive.google.com/uc?export=view&id=1fb6E7R-aAjYkK4scU-wvuC0LrJeP-O1W" alt="Helber Fabian Toro"/>
            </div>
            <div className="Header-content">
                <h1 className="Header-title">Hélber Fabián Toro Palacios</h1>
                <h2 className="Header-job-title">Web developer</h2>
                <div className="Header-content_contact-info">
                    <span className="Header-phone"><i className="fas fa-phone-alt"></i> (319) 555-5555</span>
                    <span className="Header-email"><i className="fas fa-envelope"></i> helber.toro@gmail.com</span>
                    <span className="Header-website"><i className="fas fa-link"></i> www.linkedin.com/in/helber-fabian-toro</span>
                    <p className="Header-adress"><i className="fas fa-home"></i> Bogotá - Colombia</p>
                </div>
                <div className="About">
                    {children}
                </div>
            </div>
        </div>
    </>
);

export default Header;