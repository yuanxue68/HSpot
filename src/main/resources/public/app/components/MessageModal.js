import React, { Component } from 'react'
import {closeModal} from './../util/utils'

export default class MessageModal extends Component{
	constructor(props){
		super(props)
		this.sendMessage = this.sendMessage.bind(this)
	}

	render(){
		return(
		<div className="modal fade" id="messageModal">
			<div className="modal-dialog modal-md">
				<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close"><span onClick={closeModal.bind(null,"#messageModal")}>&times;</span></button>
						<h4 className="modal-title">Message</h4>
					</div>
					<div className="modal-body">
						<div className="form-group">
							<label htmlFor="">Title</label>
							<input id="messageTitle" className="form-control" type="text" placeholder="Message Title"/>
						</div>
						<div className="form-group">
							<label htmlFor="">Content</label>
							<textarea id="messageContent" className="form-control" rows="6" placeholder="Message Content"/>
						</div>
					</div>
					<div className="modal-footer">
						<div type="button" className="btn" onClick={this.sendMessage}>Send</div>
					</div>
				</div>
			</div>
		</div>
		)
	}

	sendMessage(){
		const { userID, authed, onSendMessage } = this.props

		var content = {
			title:$("#messageTitle").val(),
			content:$("#messageContent").val(),
			sender:{
				userID:authed.userID
			},
			receiver:{
				userID
			}
		}
		$("#messageTitle").val("")
		$("#messageContent").val("")
		closeModal("#messageModal")
		onSendMessage(userID, content)
	}
}