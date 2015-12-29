import React, { Component } from 'react'

export default class UserInfoBox extends Component{
	constructor(props){
		super(props)
	}

	render(){
		const { userProfileInfo } = this.props

		return(
			<div className="profile-info-box">
				<div className="well profile-info-title bold">
					<h4 className="bold">
						Basic Information
					</h4>
				</div>
				<div className="profile-info-text">
					<div className="bold">
						My Role
					</div>
					<div className="grey-font">
						{userProfileInfo.role}
					</div>
				</div>
				<div className="profile-info-text">
					<div className="bold">
						My Skill
					</div>
					<div className="grey-font">
						{userProfileInfo.skills}
					</div>
				</div>
			</div>
		)
	}
}