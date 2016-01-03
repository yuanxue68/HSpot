import React, { Component } from 'react'
import Spinner from './Spinner'
import Message from './Message'

export default class MessagesList extends Component {
	constructor(props){
		super(props)
	}

	render(){
		var MessagesList = this.props.messages.map(function(message, index){
			return <Message key={index} message={message}/>
		})

		return(
			<div>
				{MessagesList}
				<Spinner/>
			</div>
		)
		
	}
}