import React, { Component } from 'react'
import MessageList from './MessageList'
import Spinner from './Spinner'
import PageNavigator from './PageNavigator'
import { Link } from 'react-router'

export default class MessagesTab extends Component {
	constructor(props) {
		super(props)
		this.changeTab = this.changeTab.bind(this)
	}

	changeTab(tab){
		const { params, authed, onChangeMessageTab } = this.props
		if(tab===params.messagetype){
			return
		}
		onChangeMessageTab(authed.userID, tab)
	}

	render(){
		const { params } = this.props
		return(
			<div>
				<div className="row">
					<h3 className="col-md-12 col-centered">{params.messagetype==="received" ? "Received Messages" : "Sent Messages"}</h3>
				</div>
				<div className="row">
					<div className="pull-right">
						<PageNavigator params={params} url={"/mymessages/"+params.messagetype+"/"} />
					</div>
					<div className="pull-right">
						<input type="text" className="form-control" placeholder="Search Messages"/>
					</div>
				</div>
				<div className="row">
					<div className="col-md-2 col-md-offset-1">
						<Link to={"/mymessages/received/0"} className={params.messagetype==="received" ? "active-tab" : "tab"} onClick={this.changeTab.bind(null, "received")}>Received</Link>
						<Link to={"/mymessages/sent/0"} className={params.messagetype==="sent" ? "active-tab" : "tab"} onClick={this.changeTab.bind(null, "sent")}>Sent</Link>
					</div>
					<div className="col-md-9">
						<MessageList {...this.props}/>
						<div className="col-centered">
							<PageNavigator params={params} url={"/mymessages/"+params.messagetype+"/"} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}