import React from 'react';
import '../styles/components/Skills.styl';


const Skills = ({ skills = [{}, {}, {}, {}] }) => {
    return (
        <section className='Skills'>
            <h2 className="Skills-title">Skills</h2>
            <div className='Skillss'>
                {
                    skills.map((item, index) => {
                        return (
                            <section className='Skills-item' key={index}>
                                <h3 className='item'>{item.name}</h3>
                                <p className='item'>{item.percentage}</p>
                            </section>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Skills