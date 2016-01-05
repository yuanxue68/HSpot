import React, { Component } from 'react'
import Thumbnail from './Thumbnail'
import { timeConverter, openModal } from './../util/utils'

export default class Message extends Component {
	constructor(props){
		super(props)
		this.onOpenModal = this.onOpenModal.bind(this)
	}

	onOpenModal(){
		const {message, onGetMessageDetail} = this.props
		openModal("#messageViewerModal")
		onGetMessageDetail(message.id)
	}

	render(){
		const { message, params} = this.props

		return(
			<div className="well grey-font clickable" onClick={this.onOpenModal}>
				<Thumbnail userID={message.sender} />
				<div>{params.messagetype === "sent" ? "To" : "From"}: {message.userEmail}</div>
				<div>Title: {message.title}</div>
				<div>{params.messagetype === "sent" ? "Sent On" : "Received On"}: { timeConverter(message.created) }</div>
			</div>
		)
	}
}