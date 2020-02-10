import React from 'react'
import '../styles/components/Languages.styl'

const Languages = ({language}) => {
    const languages = language || [];
    
    return (
        <div className="languages">
            <h3 className="Languages-title">Idiomas</h3>
            <ul className="Languages-list">
            {languages.map((item, key) => (
                <li key={key} className="Languages-item">
                    <div className="Languages-item__star">
                        <p><b>{item.percentage}</b></p>
                    </div>
                    <p>{item.name}</p>
                </li>
            ))}
            </ul>
        </div>
    )
} 

export default Languages;