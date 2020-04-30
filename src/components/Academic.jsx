import React from 'react';
import '../styles/components/Academic.styl';

const Academic = ({academic}) => {
    return (
        <section className="Academic">
            <h3 className="Academic-title">Academic</h3>
            <ul className="Academic-list">
                <li className="Academic-item">{academic[0].degree}</li>
                <li className="Academic-item">{academic[1].degree}</li>
                <li className="Academic-item">{academic[2].degree}</li>
            </ul>
        </section>
    );
}

export default Academic;