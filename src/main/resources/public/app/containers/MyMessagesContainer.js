import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMessages, changeMessageTab } from './../actions/MessagesAction'
import MessagesTab from './../components/MessagesTab'

class MyMessages extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount(){
		const { params, authed, dispatch } = this.props
		dispatch(getMessages(authed.userID, params.messagetype))
	}

	componentWillReceiveProps(nextProps){
		const { params, authed, dispatch } = this.props
		if ( params.page !=  nextProps.params.page ) {
			dispatch(getMessages(authed.userID, nextProps.params.messagetype, nextProps.params.page))
		}
	}

	render(){
		const { dispatch, authed, messages, params } = this.props
		return(
			<MessagesTab 
				onChangeMessageTab = { (userID, tab) => {dispatch(changeMessageTab(userID, tab))} }
				onGetMessages = { (userID, type)=> {dispatch(getMessages(userID, type))} }
				authed = { authed }
				messages = { messages }
				params = { params }/>
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