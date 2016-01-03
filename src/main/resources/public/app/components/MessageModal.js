import React, { Component } from 'react'
import {closeModal} from './../util/utils'

export default class MessageModal extends Component{
	constructor(props){
		super(props)
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
							<input id="" className="form-control" type="text" placeholder="Message Title"/>
						</div>
						<div className="form-group">
							<label htmlFor="">Content</label>
							<textarea id="" className="form-control" rows="6" placeholder="Message Content"/>
						</div>
					</div>
					<div className="modal-footer">
						<div type="button" className="btn" >Send</div>
					</div>
				</div>
			</div>
		</div>
		)
	}
}