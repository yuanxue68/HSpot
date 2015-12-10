import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import LogInModal from './LogInModal'
import SignUpModal from './SignUpModal'
import {openModal} from './../util/utils'

export default class Header extends Component{
	constructor(props) {
		super(props)
		this.submitUserSignOut = this.submitUserSignOut.bind(this)
	}
	
	render() {
		var loginOrLogOut;
		console.log(this.props.authed.authed)
		if(!this.props.authed.authed){
			console.log("signedout")
			loginOrLogOut = (	
				<ul className="nav navbar-nav navbar-right">
					<li><a href="#" onClick={openModal.bind(null,"#logInModal")}>Log In</a></li>
					<li><a href="#" onClick={openModal.bind(null,"#signUpModal")}>Sign Up</a></li>
				</ul>
			)
		} else {
			console.log("signedin")
			loginOrLogOut = 
			(	
				<ul className="nav navbar-nav navbar-right">
					<li><a href="#" onClick={this.submitUserSignOut}>Log out</a></li>
				</ul>
			)
		}
		return (
			<div>
				<LogInModal {...this.props}/>
				<SignUpModal {...this.props}/>
				<nav className="navbar navbar-default">
					<div className="container">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#login-nav">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<Link className="navbar-brand" to="/">
								<img alt="Brand" />
							</Link>
						</div>
						<div className="collapse navbar-collapse" id="login-nav">
							<ul className="nav navbar-nav">
								<li><Link to="/explore">Explore</Link></li>
							</ul>
							{loginOrLogOut}
						</div>
					</div>
				</nav>
			</div>
		)
	}

	submitUserSignOut(){
		this.props.onSignOut()
	}
}
