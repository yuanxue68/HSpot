import React, { Component } from 'react'
import Message from './Message'

export default class MessagesList extends Component {
	constructor(props){
		super(props)
	}

	render(){
		const { messages, params } = this.props

		var MessagesList = messages.map(function(message, index){
			return <Message key={index} params={params} message={message}/>
		})

		return(
			<div>
				{messages.length === 0 ? <h2 className="grey-font"><i className="fa fa-frown-o"></i> No More Messages <i className="fa fa-frown-o"></i></h2> : null}
				{MessagesList}
			</div>
		)
		
	}
}