import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import AcademicItem from './AcademicItem';

import '../styles/components/Academic.styl'

const academicIcon = <FontAwesomeIcon icon={faGraduationCap} />

const Academic = ({ academic }) => {
	const items = academic || Array(3).fill(1)
	return (
		<section className="Academic">
			<h2 className="Academic-title">{academicIcon} Academic</h2>
			{items.map((item, index) => {
				return (<AcademicItem key={index} {...item} />)
			})}
		</section>
	)
}

export default Academic