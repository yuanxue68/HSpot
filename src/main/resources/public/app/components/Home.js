import React, {Component} from 'react'
import Banner from './Banner'
import HowTo from './HowTo'
import Footer from './Footer'

export default class Home extends Component {
	constructor(props){
		super(props)
	}
	
	render(){
		return (
			<div className="container body-pad">
				<Banner {...this.props}/>
				<HowTo/>
				<Footer/>
			</div>
		)
	}
}