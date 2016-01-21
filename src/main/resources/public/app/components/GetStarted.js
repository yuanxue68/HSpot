import React, {Component} from 'react'
import {Link} from 'react-router'
import {openModal} from './../util/utils'

export default class GetStarted extends Component {
	constructor(props){
		super(props)
	}

	render(){
		const { authed } = this.props
		return (
			<div className="get-started">
				{authed.userID ? null : <button className="btn solid-btn btn-lg small-margin" onClick={openModal.bind(null,"#signUpModal")}>Sign Up</button> }
				<Link className="btn solid-btn btn-lg small-margin" to="/user">Find Partner</Link>
			</div>
		)
	}
}