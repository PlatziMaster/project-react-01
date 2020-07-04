import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const interestIcon = <FontAwesomeIcon icon={faHeart} />

import '../styles/components/Interests.styl'

const Interest = ({ hobbies }) => {
	const items = hobbies || Array(3).fill(1)
	return (
		<section className="Interest">
			<h2 className="Interest-title">{interestIcon} Interests</h2>
			<ul>
				{items.map((item, index) => {
					const i = index
					return (
						<li className="Interest-item" key={i}>{item}</li>
					)
				})}
			</ul>
		</section>
	)
}

export default Interest