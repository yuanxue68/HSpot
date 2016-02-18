import React, {Component} from 'react'
import Banner from './Banner'
import HowTo from './HowTo'

export default class Home extends Component {
	constructor(props){
		super(props)
	}
	
	render(){
		return (
			<div className="flex">
				<div className="flex-landing">
					<div className="full-height">
						<Banner {...this.props}/>
						<HowTo/>
					</div>
				</div>
		)
	}
}