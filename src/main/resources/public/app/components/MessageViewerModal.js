import React, { Component } from 'react'
import {closeModal} from './../util/utils'

export default class MessageViewerModal extends Component {
	constructor(props){
		super(props)
	}

	render(){
		const { activeMessage, params } = this.props
		var fromTo
		if(params.messagetype === "received" && activeMessage.detail.receiver){
			fromTo = "From: "+activeMessage.detail.receiver.email
		} else if (activeMessage.detail.sender){
			fromTo = "Sent To: "+activeMessage.detail.sender.email
		}
		return(
			<div className="modal fade" id="messageViewerModal">
				<div className="modal-dialog modal-md">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close"><span onClick={closeModal.bind(null,"#messageViewerModal")}>&times;</span></button>
							<h5 className="modal-title">{fromTo}</h5>
							<h4 className="modal-title">Subject: {activeMessage.detail.title}</h4>
						</div>
						<div className="modal-body">
							<div className="form-group">
								{activeMessage.detail.content}
							</div>
						</div>
						<div className="modal-footer">
							
						</div>
					</div>
				</div>
			</div>
		)
	}
}