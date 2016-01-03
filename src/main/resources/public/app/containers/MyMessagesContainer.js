import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMessages } from './../actions/MessagesAction'
import MessagesTab from './../components/MessagesTab'

class MyMessages extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render(){
		const { dispatch, authed, sentOrReceived, messages, messagePageNumber } = this.props
		return(
			<MessagesTab onGetMessages={ (userID, type)=> {dispatch(getMessages(userID, type))} }
				authed = { authed }
				sentOrReceived = { sentOrReceived }
				messages = { messages }
				messagePageNumber = { messagePageNumber }/>
		)
	}
}

function mapStateToProps(state){
	return {
		sentOrReceived: state.messageList.sentOrReceived,
		messages: state.messageList.messages,
		messagePageNumber: state.messageList.messagePageNumber,
		authed: state.authed
	}
}

export default connect(mapStateToProps)(MyMessages)