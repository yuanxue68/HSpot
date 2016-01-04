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
				<div className="nav navbar-nav navbar-right">
					<li><a className="btn btn-white" href="#" onClick={openModal.bind(null,"#logInModal")}>Log In</a></li>
					<li><a className="btn btn-white" href="#" onClick={openModal.bind(null,"#signUpModal")}>Sign Up</a></li>
				</div>
			)
		} else {
			console.log("signedin")
			loginOrLogOut = 
			(	
				<ul className="nav navbar-nav navbar-right">
					<li><Link className="btn btn-white" to={"/mymessages/received/0"}>My Messages</Link></li>
					<li><Link className="btn btn-white" to={"/myprofile"}>My Profile</Link></li>
					<li><a className="btn btn-white" href="#" onClick={this.submitUserSignOut}>Log out</a></li>
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
								<img alt="Brand" src="./../style/images/logo.png"/>
							</Link>
						</div>
						<div className="collapse navbar-collapse" id="login-nav">
							<div className="nav navbar-nav">
								<li><Link className="btn btn-green" to="/user">Explore</Link></li>
							</div>
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
