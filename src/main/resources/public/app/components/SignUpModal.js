import React, {Component} from 'react'
import {closeModal} from './../util/utils'

export default class SignUpModal extends Component{
	constructor(props){
		super(props)
		this.submitUserSignUp = this.submitUserSignUp.bind(this)
	}

	render(){
		return(
			<div className="modal fade" id="signUpModal">
				<div className="modal-dialog modal-sm">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close"><span onClick={closeModal.bind(null,"#signUpModal")}>&times;</span></button>
							<h4 className="modal-title">Sign Up</h4>
						</div>
						<div className="modal-body">
							<div className="form-group">
								<label htmlFor="">Email</label>
								<input id="signUpEmail" className="form-control" type="email" placeholder="Email Account"/>
							</div>
							<div className="form-group">
								<label htmlFor="">Password</label>
								<input id="password" className="form-control" type="password" placeholder="password"/>
							</div>
							<div className="form-group">
								<label htmlFor="">Repeat Password</label>
								<input id="repeatPassword" className="form-control" type="password" placeholder="password"/>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-default" onClick={this.submitUserSignUp}>Sign Up</button>
						</div>
					</div>
				</div>
			</div>
		)
	}

	submitUserSignUp(){
		var email = $("#signUpEmail").val()
		var password = $("#password").val()
		var repeatPassword = $("#repeatPassword").val()
		if((password!=repeatPassword)|| (!email) || (!password)){
			return
		}
		closeModal("#signUpModal")
		var userInfo ={
			email,
			password
		}
		console.log("signup")
		this.props.onSignUp(userInfo)
	}
}