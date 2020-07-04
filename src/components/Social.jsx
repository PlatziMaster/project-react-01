import React from 'react'
import SocialItem from './SocialItem'

import '../styles/components/Social.styl'

const Social = ({ social }) => {
	var items = social || Array(3).fill(1)
	return (
		<section className="Social">
			<ul>
				{items.map((item, index) => <SocialItem key={index} {...item} />)}
			</ul>
		</section>

	)
}

export default Social