import React, {Component} from 'react'
import {closeModal} from './../util/utils'

export default class SignUpModal extends Component{
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
								<input className="form-control" type="email" placeholder="Email Account"/>
							</div>
							<div className="form-group">
								<label htmlFor="">Password</label>
								<input className="form-control" type="password" placeholder="password"/>
							</div>
							<div className="form-group">
								<label htmlFor="">Repeat Password</label>
								<input className="form-control" type="password" placeholder="password"/>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-default">Sign Up</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}