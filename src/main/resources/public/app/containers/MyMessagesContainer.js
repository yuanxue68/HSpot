import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMessages, changeMessageTab, getMessageDetail } from './../actions/MessagesAction'
import MessagesTab from './../components/MessagesTab'

class MyMessages extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount(){
		const { params, dispatch } = this.props
		dispatch(getMessages(params.messagetype))
	}

	componentWillReceiveProps(nextProps){
		const { params, dispatch } = this.props
		var searchString = document.getElementById('searchMessage').value

		if ( params.page !=  nextProps.params.page ) {
			dispatch(getMessages(nextProps.params.messagetype, nextProps.params.page, searchString))
		}
	}

	render(){
		const { dispatch, authed, messages, params, activeMessage } = this.props
		return(
			<MessagesTab 
				onChangeMessageTab = { (userID, tab) => {dispatch(changeMessageTab(userID, tab))} }
				onGetMessages = { (type, page, searchString)=> {dispatch(getMessages(type, page, searchString))} }
				onGetMessageDetail = { (messageID) => {dispatch(getMessageDetail(messageID))} }
				authed = { authed }
				messages = { messages }
				params = { params }
				activeMessage= { activeMessage }/>
		)
	}
}

function mapStateToProps(state){
	return {
		messages: state.messageList.messages,
		activeMessage: state.messageList.activeMessage,
		authed: state.authed
	}
}

export default connect(mapStateToProps)(MyMessages)