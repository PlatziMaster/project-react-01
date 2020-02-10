import React from 'react'
import '../styles/components/Skills.styl'

const Skills = ({skill}) => {

    const skillss = skill || [];
    return(
        <div className="Skylls">
            <h3 className="Skills-title">Skills</h3>
            <ul className="Skills-list">
                {skillss.map((item, key) => (
                    <li key={key} className="Skills-item">
                        <i className={item.icon}></i>
                        <p>{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default Skills;