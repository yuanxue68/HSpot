import React, {Component} from 'react'
import Banner from './Banner'
import GetStarted from './GetStarted'
import HowTo from './HowTo'

export default class Home extends Component {
	render(){
		return (
			<div className="Container">
				<Banner/>
				<GetStarted/>
				<HowTo/>
			</div>
		)
	}
}