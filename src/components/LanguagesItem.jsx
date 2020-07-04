import React from 'react'

const LanguagesItem = ({ name, percentage}) => (
	<article className="Languages-item">
		<h3>{name}</h3>
		<div className="percentage" style={{ width: `${percentage}` }} data-value={percentage}></div>
	</article>
)

export default LanguagesItem