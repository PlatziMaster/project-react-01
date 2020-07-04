import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import ExperienceItem from './ExperienceItem';

import '../styles/components/Experience.styl'

const experienceIcon = <FontAwesomeIcon icon={faBriefcase} />

const Experience = ({ experience }) => {
	const items = experience || Array(3).fill(1)
	return (
		<section className="Experience">
			<h2 className="Experience-title">{experienceIcon} Experience</h2>
			{items.map((item, index) => {
				return (<ExperienceItem key={index} {...item} />)
			})}
		</section>
	)
}

export default Experience