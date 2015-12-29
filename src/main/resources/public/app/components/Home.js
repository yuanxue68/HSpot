import React, {Component} from 'react'
import Banner from './Banner'
import HowTo from './HowTo'
import Footer from './Footer'

export default class Home extends Component {
	render(){
		return (
			<div className="container body-pad">
				<Banner/>
				<HowTo/>
				<Footer/>
			</div>
		)
	}
}