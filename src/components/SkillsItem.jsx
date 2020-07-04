import React from 'react'

const SkillsItem = ({ name, percentage }) => (
	<article className="Skills-item">
		<h3>{name}</h3>
		<div className="percentage" style={{ width: `${percentage}` }} data-value={percentage}></div>
	</article>
)

export default SkillsItem