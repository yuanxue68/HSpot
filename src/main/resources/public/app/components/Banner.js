import React, {Component} from 'react'
import GetStarted from './GetStarted'

export default class Banner extends Component {
	render(){
		return (
			<div className="col-centered well banner">
				<h1>Find Your Next Hacking Partner</h1>
				<div>Use HSpot to find the right partner for your next hackthon or you next side project</div>
				<GetStarted/>
			</div>
		)
	}
}