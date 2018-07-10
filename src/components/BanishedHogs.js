import React from 'react'
import BanishedHogCard from './BanishedHogCard'

const BanishedHogs = ({ hogs }) => {
	console.log(hogs)
	return (
		<div className="banished ui three stackable cards">
			{hogs.map(hog => <BanishedHogCard name={hog.name} key={hog.name} />)}
		</div>
	)
}

export default BanishedHogs
