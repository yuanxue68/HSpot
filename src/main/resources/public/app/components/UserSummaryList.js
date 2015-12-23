import React, {Component} from 'react'
import UserSummary from './UserSummary'

export default class UserSummaryList extends Component{
	constructor(props){
		super(props)
		this.props = props
	}

	render(){
		console.log(this.props)
		var UserSummaryList = this.props.userList.map(function(user, index){
			return <UserSummary key={index} user={user}/>
		})

		return(
			<div>
				{UserSummaryList}
			</div>
		)
	}
}