import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserReviews, getUserInfo } from './../actions/userProfileAction'
import UserProfile from './../components/UserProfile'
class UserProfileContainer extends Component{
	constructor(props){
		super(props)
	}

	componentDidMount(){
		const { dispatch, params } = this.props
		dispatch(getUserInfo(params.id))
		dispatch(getUserReviews(params.id))
	}

	render(){
		const { dispatch, authed, userReviews, userProfileInfo } = this.props
		return(
			<UserProfile
			authed = { authed }
			userProfileInfo = { userProfileInfo }
			userReviews = { userReviews }
			onGetUserReview = { (userID) => dispatch(getUserReviews(userID)) }/>
		)
	}
}

function mapStateToProps(state) {
	return {
		userProfileInfo: state.userProfile.userProfileInfo,
		userReviews: state.userProfile.userReviews,
		authed: state.authed
	}
}

export default connect(mapStateToProps)(UserProfileContainer)