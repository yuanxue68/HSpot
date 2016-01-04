import React, { Component } from 'react'
import ReviewsList from './ReviewsList'
import ProfilePic from './ProfilePic'
import UserInfoBox from './UserInfoBox'
import ReviewTextArea from './ReviewTextArea'
import MessageModal from './MessageModal'
import {openModal} from './../util/utils'

export default class UserProfile extends Component{
	constructor(props){
		super(props)
	}

	render(){
		const { authed, userReviews, userProfileInfo, params } = this.props
		const { onSubmitUserReview, onSendMessage, onDeleteUserReview } = this.props

		return(
			<div className="container userProfile">
				<MessageModal onSendMessage={onSendMessage} authed={authed} userID={params.id} />
				<div className="col-md-3">
					<ProfilePic userID={params.id} canUpload={false} />
					<UserInfoBox userProfileInfo={userProfileInfo} />
				</div>
				<div className="col-md-8">
					<div>
						{Number(authed.userID) !== Number(params.id) ? <div className="btn pull-right" onClick={ openModal.bind(null,"#messageModal") }>Send Message</div>: null}
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