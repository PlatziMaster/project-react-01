import React from 'react'

const AcademicItem = ({ degree, institution, description, startDate, endDate }) => (
	<article className="Academic-item">
		<h3>{degree}</h3>
		<p>{institution}</p>
		<p>{description}</p>
		<p>{`Start date: ${startDate} - End Date: ${endDate}`}</p>
	</article>
)

export default AcademicItem