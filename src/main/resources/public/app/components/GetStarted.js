import React, {Component} from 'react'
import {Link} from 'react-router'
import {openModal} from './../util/utils'

export default class GetStarted extends Component {
	render(){
		return (
			<div className="col-centered">
				<button className="btn btn-default btn-lg" onClick={openModal.bind(null,"#signUpModal")}>Sign Up</button>
				<Link className="btn btn-default btn-lg" to="/explore">Find Partner</Link>
			</div>
		)
	}
}