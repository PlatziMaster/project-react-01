import React from 'react'
import '../styles/components/Experience.styl'

const Experience = () => (
    <>
        <div className="Experience">
            <h3 className="Experience-title">Experiencia</h3>
            <ul className="Experience-list">
                <li className="Experience-item">
                    <h4 className="Experience-item__position">
                        Software Developer
                        <span className="Experience-item__position--time">Jornada parcial</span>
                    </h4>
                    <p className="Experience-item__company">Instituto Distrital de Ciencia, Biotecnología e Innovación en Salud - IDCBIS</p>
                    <p className="Experience-item__date">jun. de 2018 – actualidad</p>
                </li>
                <li className="Experience-item">
                    <h4 className="Experience-item__position">
                        Web Developer
                        <span className="Experience-item__position--time">Freelance</span>
                    </h4>
                    <p className="Experience-item__company">Motion Factory Studios</p>
                    <p className="Experience-item__date">ene. de 2012 – actualidad</p>
                </li>
                <li className="Experience-item">
                    <h4 className="Experience-item__position">
                        Software Developer
                        <span className="Experience-item__position--time">Freelance</span>
                    </h4>
                    <p className="Experience-item__company">Mobs Audiovisual</p>
                    <p className="Experience-item__date">jun. de 2013 – actualidad</p>
                </li>
                <li className="Experience-item">
                    <h4 className="Experience-item__position">
                        Software Developer
                        <span className="Experience-item__position--time">Jornada completa</span>
                    </h4>
                    <p className="Experience-item__company">Asociación Colombiana para el Avance de la Ciencia - ACAC</p>
                    <p className="Experience-item__date">may. de 2016 – may. de 2018</p>
                </li>
            </ul>
        </div>
    </>
);

export default Experience;