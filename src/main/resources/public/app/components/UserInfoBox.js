import React, { Component } from 'react'

export default class UserInfoBox extends Component{
	constructor(props){
		super(props)
	}

	render(){
		const { userProfileInfo } = this.props

		return(
			<div className="well">
				<div>
					My Role: {userProfileInfo.role}
				</div>
				<div>
					My Skill: {userProfileInfo.skills}
				</div>
			</div>
		)
	}
}