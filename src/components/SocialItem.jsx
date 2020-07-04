import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const icons = {
	facebook: faFacebookSquare,
	twitter: faTwitterSquare,
	github: faGithubSquare,
	linkedin: faLinkedin,
}

const SocialItem = ({ name, url }) => (
	<li className="Social-item">
		<a href={url} target="_blank">
			<p>
				<FontAwesomeIcon icon={icons[name]} />
			</p>
			<p>{name}</p>
		</a>
	</li>
)

export default SocialItem