import React from 'react';
import '../styles/components/Interest.styl';

const Interest = ({interest}) => {
    return (
        <section className="Interest">
            <h3 className="Interest-title">Interest</h3>
            <ul className="Interest-list">
                <li className="Interest-item">{interest[0]}</li>
                <li className="Interest-item">{interest[1]}</li>
                <li className="Interest-item">{interest[2]}</li>
            </ul>
        </section>
    );
}

export default Interest;