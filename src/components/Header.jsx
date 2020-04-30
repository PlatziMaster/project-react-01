import React from 'react';
import '../styles/components/Header.styl';

const Header = ({children, name, img, job}) => {
    return (
        <header className="Header">
            <div className="Header-avatar">
                <img src={img} alt=""/>
            </div>
            <div className="Header-info">
                <h1 className="Header-title">{name}</h1>
                <h2 className="Header-job-title">{job}</h2>
                {children}
            </div>
        </header>
    );
}

export default Header;