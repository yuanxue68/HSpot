import React, {Component} from 'react'
import UserSummary from './UserSummary'
import InfiniteScrollify from './InfiniteScrollify'
import Spinner from './Spinner'

class UserSummaryList extends Component{
	constructor(props){
		super(props)
		this.props = props
	}

	render(){
		var UserSummaryList = this.props.users.map(function(user, index){
			return <UserSummary key={index} user={user}/>
		})

		return(
			<div>
				{UserSummaryList}
				{this.props.isFetchingUser ? <Spinner/> : null}
			</div>
		)
	}
}

export default InfiniteScrollify(UserSummaryList);