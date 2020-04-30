import React from 'react';
import '../styles/components/Academic.styl';

const Academic = ({academics = [{"degree":'Arquitecto Frontend'}, {"degree":'Ingles Profesional'}, {"degree":'Enginnering'}]}) => {
    return (
        <section className="Academic">
            <h3 className="Academic-title">Academic</h3>
            <ul className="Academic-list">
                {academics.map((academic, index) => {
                    return(<li key={"Academic " + (index + 1)} className="Academic-item">{academic.degree}</li>)
                })}
            </ul>
        </section>
    );
}

export default Academic;