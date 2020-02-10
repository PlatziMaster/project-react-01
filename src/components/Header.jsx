import React from 'react'
import '../styles/components/Header.styl'

const Header = ({children, data}) => {

    return(
        <div className="Header">
            <div className="Header-photo">
                <img src={data.avatar} alt="Helber Fabian Toro"/>
            </div>
            <div className="Header-content">
                <h1 className="Header-title">{data.name}</h1>
                <h2 className="Header-job-title">{data.profession}</h2>
                <div className="Header-content_contact-info">
                    <span className="Header-phone"><i className="fas fa-phone-alt"></i> {data.phone}</span>
                    <span className="Header-email"><i className="fas fa-envelope"></i> {data.email}</span>
                    <span className="Header-website"><i className="fas fa-link"></i> {data.website}</span>
                    <p className="Header-adress"><i className="fas fa-home"></i> {data.address}</p>
                </div>
                <div className="About">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Header;