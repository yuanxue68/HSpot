import React, {Component} from 'react'
import {closeModal} from './../util/utils'

export default class LogInModal extends Component{
	constructor(props){
		super(props)
		this.submitUserSignIn= this.submitUserSignIn.bind(this)
	}
	render(){
		return(
			<div className="modal fade" id="logInModal">
				<div className="modal-dialog modal-sm">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close"><span onClick={closeModal.bind(null,"#logInModal")}>&times;</span></button>
							<h4 className="modal-title">Login</h4>
						</div>
						<div className="modal-body">
							<div className="form-group">
								<label htmlFor="">Email</label>
								<input id="signInEmail" className="form-control" type="email" placeholder="Email Account"/>
							</div>
							<div className="form-group">
								<label htmlFor="">Password</label>
								<input id="signInPassword" className="form-control" type="password" placeholder="password"/>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-default" onClick={this.submitUserSignIn}>Login</button>
						</div>
					</div>
				</div>
			</div>
		)
	}

	submitUserSignIn(){
		console.log("signing in")
		var email = $("#signInEmail").val()
		var password = $("#signInPassword").val()
		if((!email) || !password){
			return
		}
		closeModal("#logInModal")
		var userInfo ={
			email,
			password
		}
		console.log("sign in ")
		this.props.onSignIn(userInfo)
	}
}