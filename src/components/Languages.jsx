import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import LanguagesItem from './LanguagesItem';

import '../styles/components/Languages.styl'

const languagesIcon = <FontAwesomeIcon icon={faLanguage} />

const Languages = ({ languages }) => {
	const items = languages || Array(3).fill(1)
	return (
		<section className="Languages">
			<h2 className="Languages-title">{languagesIcon} Languages</h2>
			{items.map((item, index) => {
				return (
					<LanguagesItem key={index} {...item} />
				)
			})}
		</section>
	)
}

export default Languages