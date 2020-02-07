import React from 'react'
import '../styles/components/Academic.styl'

const Academic = () => (
    <>
        <div className="Academic">
            <h3 className="Academic-title">Educación</h3>
            <ul className="Academic-list">
                <li className="Academic-item">
                    <h4 className="Academic-item__institution">Universidad Nacional Abierta y a Distacia - UNAD</h4>
                    <p className="Academic-item__title">Ingeniero de sistemas <span className="Academic-item__title--note">En curso</span></p>
                </li>
                <li className="Academic-item">
                    <h4 className="Academic-item__institution">Universidad Piloto de Colombia</h4>
                    <p className="Academic-item__title">Diplomado en desarrollo de páginas web</p>
                </li>
                <li className="Academic-item">
                    <h4 className="Academic-item__institution">Fundación universitaria San Mateo</h4>
                    <p className="Academic-item__title">Técnico profesional en sistemas y telecomunicaciones</p>
                </li>
                <li className="Academic-item">
                    <h4 className="Academic-item__institution">Platzi</h4>
                    <ul className="Academic-item__list">
                        <li>Backend con node.js</li>
                        <li>React JS</li>
                        <li>React router y redux</li>
                        <li>Profesional de javascript</li>
                    </ul>
                    <a className="Academic-item__ref" target="_blank" href="https://platzi.com/@fabiantoro/">Ver todo</a>
                </li>
            </ul>
        </div>
    </>
);

export default Academic;