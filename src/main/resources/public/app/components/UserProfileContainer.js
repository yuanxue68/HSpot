import React, {Component} from 'react'
import UserProfile from './UserProfile'

class UserProfileContainer extends Component{
	constructor(props){
		super(props)
	}

	render(){
		const {dispatch} = this.props

		return (
			<UserProfile/>
		)

	}
}

function mapStateToProps(state) {
	return{
		userProfileEditable:state.userProfileEditable,
		userProfile: state.userProfile
	}
}

//connect(mapStateToProps)(UserProfileContainer)