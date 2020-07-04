import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';

import '../styles/components/Profile.styl'

const badgeIcon = <FontAwesomeIcon icon={faIdBadge} />

const Profile = ({ description }) => (
	<section className="Profile">
		<h2 className="Profile-title">{badgeIcon} Profile</h2>
		<p className="Profile-desc">{description}</p>
	</section>
)

export default Profile