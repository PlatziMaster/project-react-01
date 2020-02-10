import React from 'react'
import '../styles/components/Academic.styl'

const Academic = ({academic}) => {
    const academics = academic || [];

    return (
        <div className="Academic">
            <h3 className="Academic-title">Educación</h3>
            <ul className="Academic-list">
                {academics.map((item, key) => (
                    <li key={key} className="Academic-item">
                        <h4 className="Academic-item__institution">{item.institution}</h4>
                        <p className="Academic-item__title">{item.degree} <span className="Academic-item__title--note">{item.endDate}</span></p>
                    </li>
                ))

                }
            </ul>
        </div>
    )
}

export default Academic;