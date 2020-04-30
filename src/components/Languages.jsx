import React from 'react';
import '../styles/components/Languages.styl';

const Languages = ({languages = [{"name":'English'}, {"name":'Protuguese'}, {"name":'Spanish'}]}) => {
    return (
        <section className="Languages">
            <h3 className="Languages-title">Languages</h3>
            <ul className="Languages-list">
                {languages.map((language, index) => {
                    return(<li key={"Language " + (index + 1)} className="Languages-item">{language.name}</li>)
                })}
            </ul>
        </section>
    );
}

export default Languages;
