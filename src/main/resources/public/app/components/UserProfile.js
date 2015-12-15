import React, {Component} from 'react'

export default class UserProfile extends Component{
	constructor(props){
		super(props)
	}

	render(){
		var name 
		var role
		var skills
		const {userProfileInfo, userProfileEditable} = this.props
		console.log(this.props)
		if(userProfileEditable.name){
			<div>{userProfile.name}</div>
		} else {
			<input type="text" value={userProfileInfo.name}></input>
		}

		if(userProfileEditable.role){
			<div>{userProfile.role}</div>
		} else {
			<input type="text" value={userProfileInfo.role}></input>
		}

		if(userProfileEditable.skills){
			<div>{userProfile.skills.join(", ")}</div>
		} else {
			<input type="text" value={userProfileInfo.skills.join(", ")}></input>
		}



		return(
			<div>
				<div>
					<div>My Name: </div>
					{name}
				</div>
				<div>
					<div>My Role: </div>
					{role}
				</div>
				<div>
					<div>My Skill: </div>
					{skills}
				</div>
			</div>
		)
	}
}