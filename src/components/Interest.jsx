import React from 'react'
import '../styles/components/Interest.styl'

const Interest = () => (
    <>
        <div className="interest">
            <h3 className="Interest-title">Intereses</h3>
            <ul className="Interest-list">
                <li className="Interest-item">
                    <i className="fab fa-laravel fa-3x"></i>
                    <p>Laravel</p>
                </li>
                <li className="Interest-item">
                <i className="fab fa-node fa-3x"></i>
                    <p>Node</p>
                </li>
                <li className="Interest-item">
                    <i className="fab fa-react fa-3x"></i>
                    <p>React.js</p>
                </li>
                <li className="Interest-item">
                    <i className="fab fa-vuejs fa-3x"></i>
                    <p>Vue.js</p>
                </li>
            </ul>
        </div>
    </>
);

export default Interest;