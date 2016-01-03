import React, { Component } from 'react'
import MessageList from './MessageList'

export default class MessagesTab extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount(){
		const { sentOrReceived, authed, onGetMessages } = this.props
		onGetMessages(authed.userID, sentOrReceived)
	}

	render(){
		return(
			<div>
				<div>
					<div>Sent</div>
					<div>Received</div>
				</div>
				<MessageList {...this.props}/>
			</div>
		)
	}
}