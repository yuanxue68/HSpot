import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'

export default class Header extends Component{
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">
							<img alt="Brand" />
						</a>
					</div>
					<div className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							<li><Link to="/explore">Explore</Link></li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}

}
