import React from 'react';
import '../styles/components/Interest.styl';

const Interest = ({interests = ['JavaScript', 'ReactJS', 'NodeJS']}) => {
    return (
        <section className="Interest">
            <h3 className="Interest-title">Interest</h3>
            <ul className="Interest-list">
                {interests.map((interest, index) => {
                    return(<li key={"Interest " + (index + 1)} className="Interest-item">{interest}</li>)
                })}
            </ul>
        </section>
    );
}

export default Interest;