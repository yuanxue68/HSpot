import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import LogInModal from './LogInModal'
import SignUpModal from './SignUpModal'
import {openModal} from './../util/utils'

export default class Header extends Component{
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<div>
				<LogInModal/>
				<SignUpModal/>
				<nav className="navbar navbar-default">
					<div className="container">
						<div className="navbar-header">
							<Link className="navbar-brand" to="/">
								<img alt="Brand" />
							</Link>
						</div>
						<div className="collapse navbar-collapse">
							<ul className="nav navbar-nav">
								<li><Link to="/explore">Explore</Link></li>
							</ul>
							<ul className="nav navbar-nav navbar-right">
								<li><a href="#" onClick={openModal.bind(null,"#logInModal")}>Log In</a></li>
								<li><a href="#" onClick={openModal.bind(null,"#signUpModal")}>Sign Up</a></li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		)
	}
}
