import React from 'react'

const ExperienceItem = ({ jobTitle, jobDescription, company, startDate, endDate }) => (
	<article className="Experience-item">
		<h3>{jobTitle}</h3>
		<p>{company}</p>
		<p>{jobDescription}</p>
		<p>{`Start date: ${startDate} - End date: ${endDate}`}</p>
	</article>
)

export default ExperienceItem