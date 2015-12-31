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
			<div className="container userProfile">
				<div className="col-md-3">
					<ProfilePic userID={params.id} canUpload={false} />
					<UserInfoBox userProfileInfo={userProfileInfo} />
				</div>
				<div className="col-md-8">
					<div>
						<h1>Hey! My name is {this.props.userProfileInfo.name} </h1>
					</div>
					<div>
						<h3>About Me: </h3>
						<div className="grey-font">{this.props.userProfileInfo.description}</div>
					</div>
					<ReviewsList 
						reviews={ userReviews } 
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