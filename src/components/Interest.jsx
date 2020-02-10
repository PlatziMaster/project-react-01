import React from 'react'
import '../styles/components/Interest.styl'

const Interest = ({interest}) => {
    const interests = interest || [];
    
    return(
        <div className="interest">
            <h3 className="Interest-title">Intereses</h3>
            <ul className="Interest-list">
            {interests.map((item, key) => (
                <li key={key} className="Interest-item">
                    <i className="fas fa-star"></i>
                    <p>{item}</p>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Interest;