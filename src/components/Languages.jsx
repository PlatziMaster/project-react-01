import React from 'react'
import '../styles/components/Languages.styl'

const Languages = () => (
    <>
        <div className="languages">
            <h3 className="Languages-title">Idiomas</h3>
            <ul className="Languages-list">
                <li className="Languages-item">
                    <div className="Languages-item__star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p>Español</p>
                </li>
                <li className="Languages-item">
                    <div className="Languages-item__star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p>Inglés</p>
                </li>
                <li className="Languages-item">
                    <div className="Languages-item__star">
                        <i className="fas fa-star"></i>
                    </div>
                    <p>Francés</p>
                </li>
            </ul>
        </div>
    </>
);

export default Languages;