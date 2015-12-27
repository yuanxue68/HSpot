import React, { Component } from 'react'
import ReviewsList from './ReviewsList'
import ProfilePic from './ProfilePic'
import UserInfoBox from './UserInfoBox'
import ReviewTextArea from './ReviewTextArea'

export default class UserProfile extends Component{
	constructor(props){
		super(props)
	}

	render(){
		const { authed, userReviews, userProfileInfo, onSubmitUserReview, params, onDeleteUserReview } = this.props

		return(
			<div className="container">
				<div className="col-md-3 col-md-offset-1">
					<ProfilePic canUpload={false} />
					<UserInfoBox userProfileInfo={userProfileInfo} />
				</div>
				<div className="col-md-7">
					<div>
						<h1>Hey! My name is {this.props.userProfileInfo.name} </h1>
					</div>
					<div>
						<h3>About Me: </h3>
					</div>
					<ReviewsList 
						reviews={userReviews} 
						authed={ authed }
						onDeleteUserReview={ onDeleteUserReview } />
					<ReviewTextArea 
						authed={ authed } 
						params={ params } 
						onSubmitUserReview={ onSubmitUserReview } />
				</div>
			</div>
		)
	}
}