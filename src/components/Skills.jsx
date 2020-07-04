import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJournalWhills } from '@fortawesome/free-solid-svg-icons';
import SkillsItem from './SkillsItem';

import '../styles/components/Skills.styl'

const skillsIcon = <FontAwesomeIcon icon={faJournalWhills} />

const Skills = ({ skills }) => {
	const items = skills || Array(3).fill(1)
	return (
		<section className="Skills">
			<h2 className="Skills-title">{skillsIcon} Skills</h2>
			{items.map((item, index) => {
				return (<SkillsItem key={index} {...item} />)
			})}
		</section>
	)
}

export default Skills