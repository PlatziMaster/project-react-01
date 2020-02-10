import React from 'react'
import '../styles/components/Experience.styl'

const Experience = ({experience}) => {
    const experiences = experience || [];

    return(
        <div className="Experience">
            <h3 className="Experience-title">Experiencia</h3>
            <ul className="Experience-list">
                {experiences.map((item, key) => (
                    <li key={key} className="Experience-item">
                        <h4 className="Experience-item__position">
                            {item.jobTitle}
                            <span className="Experience-item__position--time">{`${item.startDate} - ${item.endDate}`}</span>
                        </h4>
                        <p className="Experience-item__company">{item.company}</p>
                        <p className="Experience-item__date">{item.jobDescription}</p>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default Experience;