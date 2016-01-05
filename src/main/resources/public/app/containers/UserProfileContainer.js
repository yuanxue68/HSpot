import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserReviews, getUserInfo, submitUserReview, deleteUserReview } from './../actions/userProfileAction'
import UserProfile from './../components/UserProfile'
import { sendMessage } from './../actions/MessagesAction'

class UserProfileContainer extends Component{
	constructor(props){
		super(props)
	}

	componentDidMount(){
		const { dispatch, params } = this.props
		dispatch(getUserInfo(params.id))
		dispatch(getUserReviews(params.id))
	}

	componentWillReceiveProps(nextProps){
		const { params, dispatch } = this.props
		if ( params.id !=  nextProps.params.id ) {
			dispatch(getUserInfo(nextProps.params.id))
			dispatch(getUserReviews(nextProps.params.id))
		}
	}

	render(){
		const { dispatch, authed, userReviews, userProfileInfo, params } = this.props
		return(
			<UserProfile
			authed = { authed }
			userProfileInfo = { userProfileInfo }
			userReviews = { userReviews }
			params = { params }
			onGetUserReview = { (userID) => dispatch(getUserReviews(userID)) }
			onSubmitUserReview = { (review, userID) => dispatch(submitUserReview(review, userID)) }
			onDeleteUserReview = { (userID, reviewID) => dispatch(deleteUserReview(userID, reviewID)) }
			onSendMessage = { (userID, content) => dispatch(sendMessage(userID, content))} />
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