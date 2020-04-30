import React from 'react';
import '../styles/components/Languages.styl';

const Languages = ({languages}) => {
    return (
        <section className="Languages">
            <h3 className="Languages-title">Languages</h3>
            <ul className="Languages-list">
                {languages.map((language) => {
                    <li className="Languages-item">{language.name}</li>
                })}
                {/* <li className="Languages-item">{languages[0].name}</li>
                <li className="Languages-item">{languages[1].name}</li>
                <li className="Languages-item">{languages[2].name}</li> */}
            </ul>
        </section>
    );
}

export default Languages;
