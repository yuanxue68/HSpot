import React, { Component } from 'react'
import {closeModal} from './../util/utils'

export default class MessageViewerModal extends Component {
	constructor(props){
		super(props)
	}

	render(){
		const { activeMessage } = this.props
		return(
			<div className="modal fade" id="messageViewerModal">
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close"><span onClick={closeModal.bind(null,"#messageViewerModal")}>&times;</span></button>
							<h4 className="modal-title">{activeMessage.detail.title}</h4>
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